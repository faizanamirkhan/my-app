// import logo from './logo.svg';

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(() => {
    setAlert()
   }, 2000);
  }
  const toggleMode=()=>{
if (mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor="#474e52";
  showAlert("Dark mode has been enabled","success")
  document.title="Text Editor-Dark Mode"
}
else{
  setMode('light')
  document.body.style.backgroundColor="white";
  showAlert("Light mode has been enabled","success")
  document.title="Text Editor-Light Mode"
}
}
  return (
    <>
 {/* <Router> */}
  <Navbar  nav="About"  mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3 ">
  {/* <Routes>
        <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/" />  */}
        <TextForm showAlert={showAlert}  heading={"Enter Your Paragraph"} mode={mode} />
    {/* </Routes> */}


  </div>
  {/* </Router> */}
  </>
 
  );
}

export default App;
