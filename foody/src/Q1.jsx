import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Video from './Video'
// import './Home.css'
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import './Q1.css'

const Body = () => {
  const [value, setvalue] = useState(0);


  useEffect(() => {
    console.log(value);
    localStorage.setItem('key', value);
  })
  return (
    <div className="Q1up">
      <section className="radio111question">
        <h1>On a scale of 1 to 10, how would you rate your current mood?</h1>
      </section>
      <div className="circle-container">
        <button
          type="button"
          className="circle"
          onClick={() => {
            setvalue(3);
          }}
        >
          1
        </button>
        <button
          type="button"
          className="circle"
          onClick={() => {
            setvalue(3);
          }}
        >
          2
        </button>
        <button
          type="button"
          className="circle"
          onClick={() => {
            setvalue(3);
          }}
        >
          3
        </button>
        <button
          type="button"
          className="circle"
          onClick={() => {
            setvalue(3);
          }}
        >
          4
        </button>
        <button
          type="button"
          className="circle"
          onClick={() => {
            setvalue(5);
          }}
        >
          5
        </button>
        <button type="button" className="circle" onClick={()=>{setvalue(5)}}>
          6
        </button>
        <button type="button" className="circle" onClick={()=>{setvalue(5)}}>
          7
        </button>
        <button type="button" className="circle" onClick={()=>{setvalue(7)}}>
          8
        </button>
        <button type="button" className="circle" onClick={()=>{setvalue(7)}}>
          9
        </button>
        <button type="button" className="circle" onClick={()=>{setvalue(7)}}>
          10
        </button>
      </div>

      <Link to="/q1/q2">
        <button className="Q1btn">Next</button>
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
