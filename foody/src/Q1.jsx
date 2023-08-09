import React from 'react'
import Navbar from './Navbar'
import Video from './Video'
// import './Home.css'
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import './Q1.css'

const Body = () => {
  return (
    <div className='Q1up'>
      <section className="radio111question">
        <h1>On a scale of 1 to 10, how would you rate your current mood?</h1>
      </section>

      
      <Link to="/q1/q2">
        <button className="Q1btn">🡲</button>
      </Link>
    </div>
  );
}



function Q1() {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Video />
      <Navbar />
      <Body />
    </motion.div>
  );
}

export default Q1
