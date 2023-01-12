import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import About from './About';
import { useState } from 'react';
import About from './About';
import Alert from './Alert';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom"; 

function App() {
 const[mode, setMode] = useState('light');
 const [textMode, setTextMode] = useState('dark');

 const[alert, setAlert] = useState(null);

 const showAlert =(message,type)=>{
   setAlert({
     msg:message,
     type:type
   })
    setTimeout(()=>{
      setAlert(null);
    },2000)
 };



 const toggleMode =()=>{
  if(mode ==='light'){
    setMode('dark');
    setTextMode('light')
    document.body.style.backgroundColor='grey'
    showAlert("Dark mode is enabled","success");
  } else{
    setMode('light');
    setTextMode('dark')
    document.body.style.backgroundColor='white'
    showAlert("light mode is enabled","success");
  }
 }


  return (
    <>
    {/* <Router> */}
    <Navbar title = "Textutils2" mode ={mode} toggleMode={toggleMode} textMode={textMode}/>
    <Alert alert={alert}/>

    <div className="container my-3">
          
              {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={*/}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> 
            {/* </Route>
            </Routes>
           */}
        </div>
   
        {/* </Router>
     */}
    
    
    
    </>
  );  
}

export default App;
