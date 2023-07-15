import React from 'react'
import Navbar from './Navbar'
import Video from './Video'
import './Q3.css'
// import { Link } from "react-router-dom";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import { motion } from "framer-motion"

function Q3() {
  return (
    <div>
      <Video /> 
      <Navbar />
      <section className="radio1question">
        <h1>Are you feeling motivated / demotivated today?</h1>
      </section>

      <section className="radio3answer1">
        <input type="radio" name="taste" id="salt-radio" />
        <label for="salt-radio" className="salt-radio">
          Motivated
        </label>
      </section>

      <section className="radio3answer2">
        <input type="radio" name="taste" id="spicy-radio" />
        <label for="spicy-radio" className="spicy-radio">
          Demotivated
        </label>
      </section>

     

      {/* <section className="nextradio">
        <ArrowCircleRightIcon />
      </section> */}
      {/* <Link to="/q1/q2">
        <button className="btn">Next</button>
      </Link> */}
    </div>
  );
}

export default Q3
