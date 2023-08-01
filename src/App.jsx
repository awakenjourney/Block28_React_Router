import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Blue from "./components/blue";
import Red from "./components/red";

const App = () => {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/home">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
