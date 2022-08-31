import './App.css';
 import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("");

  const showAlert =(message, type) =>{
      setAlert({
        message : message,
        type : type
      })

      setTimeout(() => {
        setAlert("")
      }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = '#fff1ff'
      document.body.style.color = "black"
      showAlert("Light Mode is On", "success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = "white";
      showAlert("Dark Mode is on", "success");
    }
  }
  return (
    <> 
      <Navbar title = "TextUtlites" mode = {mode} toggleMode={toggleMode} about= {About} />
      <Alert alert = {alert}/>
      <div className='container mb-3'>
      <TextForm showAlert= {showAlert} title = "Enter the text for analysing"/>
      </div>


        
      
    </>
  );
}

export default App;
