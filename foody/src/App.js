import React from "react";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Home from "./Home";
// import Home from "./Home";
// import Q1 from "./Q1";
// import Q2 from "./Q2";
import "./App.css";
// import Navbar from "./Navbar";
import { BrowserRouter as Router} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Animatedroute from "./Animatedroute";

function App() {
  // const location = useLocation(); 
  return (
    <Router>
      <AnimatePresence>
          <Animatedroute />
      </AnimatePresence>
    </Router>
  );
}


export default App;
