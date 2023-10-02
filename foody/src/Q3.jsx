import React from 'react'
import Navbar from './Navbar'
import Video from './Video'
import './Q3.css'
import { Link } from "react-router-dom";
// import Happy from './Happy';
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import { motion } from "framer-motion"

function Q3() {
  return (
    <div>
      <Video />
      <Navbar />

      <section className="radio333question">
        <h1>Are you feeling motivated / demotivated today?</h1>
      </section>

      <div className='order'>
        <section className="radio333answer1">
          <input type="radio" name="taste" id="salt-radio" />
          <label for="salt-radio" className="motivated-radio">
            Motivated
          </label>
        </section>

        <section className="radio333answer2">
          <input type="radio" name="taste" id="spicy-radio" />
          <label for="spicy-radio" className="demotivated-radio">
            Demotivated
          </label>
        </section>
      </div>

      {/* <section className="nextradio">
        <ArrowCircleRightIcon />
      </section> */}
      <Link to="/q1/q2/q3/happy">
        <button className="btn333">Next</button>
      </Link>
    </div>
  );
}

export default Q3
