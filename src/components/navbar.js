import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import Themebutton from '../Themebutton';


export default function Navbar(props) {
    return (
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        {/* <div className="me-5 d-flex align-items-center">
                            <h6 className="nav-link text-light">Color Themes</h6>
                            <Themebutton bgcolor = "#1f0e57" changeTheme={props.changeTheme}/>
                            <Themebutton bgcolor = "#470a0e" changeTheme={props.changeTheme}/>
                            <Themebutton bgcolor = "#422c07" changeTheme={props.changeTheme}/>
                            <Themebutton bgcolor = "#0a4214" changeTheme={props.changeTheme}/>
                            <Themebutton bgcolor = "#3d043b" changeTheme={props.changeTheme}/>
                        </div> */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-light`} htmlFor="flexSwitchCheckDefault">{props.mode==="dark"?"Dark":"Light"} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
                )
}
Navbar.propTypes = {
    title: PropTypes.string
}
Navbar.defaultProps = {
    title:'Set title here'
}
