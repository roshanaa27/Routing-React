import React from "react";
//import { ReactDOM } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";

function App() {
  return (
    <Router>
      <div>
        <h1>React Router</h1>
        <nav className="set-nav">
          <p className="nav">
            <Link className="nav-top" to="/">Home</Link>
            <Link className="nav-top" to="/About">About</Link>
            <Link className="nav-top" to="/Contact">Contact</Link>
          </p>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
