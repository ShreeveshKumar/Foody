import React from "react";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Q1 from "./Q1";
import "./App.css";
// import Navbar from "./Navbar";
import { Route, Router, Routes } from "react-router-dom";





function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<Home />}/>    
          <Route path="/Q1" element={<Q1/>}/>
        </Routes>
    </Router>
  );
}

export default App;
