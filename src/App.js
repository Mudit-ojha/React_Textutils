
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";



function App() {
  const [mode, setMode]= useState ('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 const toggleMode = ()=>{
  if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark mode has been enabled", "success");
     document.title = 'Textutils - Dark Mode';
    //  setInternal(()=>{
    //   document.title = 'Textutils is Amazing Mode';
    //  },2000);
    //  setInternal(()=>{
    //   document.title = 'Install Textutils now';
    //  },1500);
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = 'Textutils - Light Mode';
  }
  }
  return (
<>
{/* <Router> */}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Navbar/> */}
<div className="container my-3">

  {/* <Link to="/About"></Link> */}
  {/* <Link to="/">Click here</Link> */}
  
        {/* <Routes> */}
          {/* <Route exact path="/About" element={ <About />}/> */}
           
          
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          
          
        {/* </Routes> */}
</div>
{/* </Router> */}

</>
  );
}

export default App;
