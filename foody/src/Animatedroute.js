import React from 'react'

import Home from "./Home";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3"
import Happy from "./Happy"
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


const Animatedroute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Q1" element={<Q1 />} />
        <Route exact path="/Q1/Q2" element={<Q2 />} />
        <Route exact path="Q1/Q2/Q3" element={<Q3 />} />
        <Route exact path="Q1/Q2/Q3/Happy" element={<Happy />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Animatedroute