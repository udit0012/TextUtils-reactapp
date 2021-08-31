import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/navbar';
import Textform from './components/textform';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("dark");
  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  // const changeTheme = (bgcolor)=>{
  //   setMode("light");
  //   document.body.style.backgroundColor = bgcolor;
  //   showAlert("Theme has been enabled","success"); 
  // }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar title="MytextUtils" mode={mode} toggleMode={togglemode} />
        <Alert alert={alert} />
        <div>
          <Switch>
            <Route path="/about">
              <About mode={mode} showAlert={showAlert} />
            </Route>
            <Route path="/">
              <Textform mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
