import "./App.css";
import About from "./components/About";
import MyNavbar from "./components/MyNavbar";
import { useState } from "react";
import TextForm from "./components/TextForm";
import MyAlert from "./components/MyAlert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#383838";
      showAlert("Switched to Dark Mode.");
      document.title = "Word Counter Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Word Counter Light Mode";
      showAlert("Switched to Light Mode.");
    }
  };
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <div className="App">
      {/* <Router> */}
      <MyNavbar
        title="V.R.Developers"
        home="Home"
        link="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <MyAlert showAlert={showAlert} message={alert} />
      {/* <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/home"
            element={ */}
      <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert} />
      </div>
      {/* }
          ></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
