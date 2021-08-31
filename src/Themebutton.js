import React from 'react'

export default function Themebutton(props) {
    return (
        <button type="button" className="btn mx-1 border-light" onClick={()=>{props.changeTheme(props.bgcolor)}} style={{backgroundColor: props.bgcolor, height:"25px",width: "20px"}}></button>
    )
}
