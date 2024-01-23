import React from "react";
import Navbar from "./Navbar";
import Video from "./Video";
import "./Q3.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Q3() {
  const value = localStorage.getItem("key");
  const keyvalue = parseInt(value, 10);

  const [keye, setkeye] = useState(keyvalue);

  useEffect(() => {
    console.log(keye);
    localStorage.setItem("key", keye);
  });

  const DecideRoute = () => {
    if (keyvalue === 0) {
      return "/";
    } else if (keyvalue >= 30) {
      return "/q1/q2/q3/happy";
    } else if (keyvalue >= 20) {
      return "/q1/q2/q3/neutral";
    } else if (keyvalue >= 10) {
      return "/q1/q2/q3/sad";
    }
  };

  return (
    <div>
      <Video />
      <Navbar />

      <section className="radio333question">
        <h1>Are you feeling motivated / demotivated today?</h1>
      </section>

      <div className="order">
        <section className="radio333answer1">
          <input
            type="radio"
            name="taste"
            id="salt-radio"
            onChange={() => {
              setkeye(keye + 10);
            }}
          />
          <label for="salt-radio" className="motivated-radio">
            Motivated
          </label>
        </section>

        <section className="radio333answer2">
          <input
            type="radio"
            name="taste"
            id="spicy-radio"
            onChange={() => {
              setkeye(keye + 10);
            }}
          />
          <label for="spicy-radio" className="demotivated-radio">
            Demotivated
          </label>
        </section>
      </div>

      {/* <section className="nextradio">
        <ArrowCircleRightIcon />
      </section> */}
      <Link to={DecideRoute()}>
        <button className="btn333">Next</button>
      </Link>
    </div>
  );
}

// const Decide = () => {
//   const value = localStorage.getItem("key");
//   const keyvalue = parseInt(value, 10);
//   if(keyvalue )
// }

export default Q3;
