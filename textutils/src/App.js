import { useState } from 'react';
import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const details = {
    title: "TextUtils",
    home: "Home",
    about: "About",
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("success", "Dark mode has been enabled");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled");
    }
  }

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
        <NavBar data={details} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
        {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} /> */}
          {/* <Route exact path="/about" element={<About heading="About Us" mode={mode} toggleMode={toggleMode} />} /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;