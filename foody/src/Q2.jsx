import React from "react";
import Navbar from "./Navbar";
import Video from "./Video";
import "./Q2.css";
import { Link } from "react-router-dom";
// import Q3 from "./Q3";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <div>
      <section className="radio1question">
        <h1>
          How would you describe
          <br /> your energy level at the <br />
          moment?
        </h1>
      </section>

      <section className="radio2answer1">
        <input type="radio" name="taste" id="sweet-radio" />
        <label for="sweet-radio" className="sweet-radio">
          Energetic
        </label>
      </section>

      <section className="radio2answer2">
        <input type="radio" name="taste" id="bitter-radio" />
        <label for="bitter-radio" className="bitter-radio">
          Normal
        </label>
      </section>

      <section className="radio2answer3">
        <input type="radio" name="taste" id="umami-radio" />
        <label for="umami-radio" className="unami-radio">
          Drained out
        </label>
      </section>

      <Link to="/q1/q2/q3">
        <button className="radio2btn">Next</button>
      </Link>
    </div>
  );
};

function Q2() {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: 1 }}
    >
      <Video />
      <Navbar />
      <Body />
    </motion.div>
  );
}

export default Q2;
