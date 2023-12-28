import React from "react";
import Navbar from "./Navbar";
import Video from "./Video";
import "./Q2.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";


const Body = () => {
  const value = localStorage.getItem('key');
  const keyvalue = parseInt(value, 10);

  const [keye, setkeye] = useState(keyvalue)


  


   useEffect(() => {
     console.log(keye);
     localStorage.setItem("key", keye);
   });
  
  
  
  return (
    <div className="radio222up">
      <section className="radio222question">
        <h1>
          How would you describe
          <br /> your energy level at the <br />
          moment?
        </h1>
      </section>

      <section className="radio222answer1">
        <input
          type="radio"
          name="taste"
          id="sweet-radio"
          onChange={() => {
            setkeye(keye+7);
          }}
        />
        <label for="sweet-radio" className="energy-radio">
          Energetic
        </label>
      </section>

      <div className="order2">
        <section className="radio222answer2">
          <input
            type="radio"
            name="taste"
            id="bitter-radio"
            onChange={() => {
              setkeye(keye+5);
            }}
          />
          <label for="bitter-radio" className="normal-radio">
            Normal
          </label>
        </section>

        <section className="radio222answer3">
          <input
            type="radio"
            name="taste"
            id="umami-radio"
            onChange={() => {
              setkeye(keye+3);
            }}
          />
          <label for="umami-radio" className="drained-radio">
            Drained out
          </label>
        </section>
      </div>
      <Link to="/q1/q2/q3">
        <button className="radio222btn">Next</button>
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
