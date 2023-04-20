
import Navbar from './component/Navbar';
import './App.css';
import TextForm from './component/TextForm';
// import About from './component/About';
import React, {useState} from 'react';
import Alert from './component/Alert';

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) => {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!","success");
    }
  }

  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
            {/* <About></About> */}
       </div>
        
        
    </>
  );
}

export default App;
