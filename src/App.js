import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React,{useState} from 'react';



function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enable or not
  
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type:type,
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled 🌑","success");
      document.title = "Meet text edit - Dark mode"

      //highlight apva mate , spam karva mate
      // setInterval(()=>{
      //   document.title = 'Meet edit is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install now';
      // },1500);


    }else{
     setMode('light')
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled","success");
     document.title = "Meet text edit - Light mode"

    }
  }
  return (
    <>
      <Navbar title="Meet" aboutText="About website" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
