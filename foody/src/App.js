import React from "react";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Home from "./Home";
import Home from "./Home";
import Q1 from "./Q1";
import "./App.css";
// import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Q1" element={<Q1 />} />
      </Routes>
    </Router>
  );
}

export default App;
