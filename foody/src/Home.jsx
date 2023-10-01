import React,{useState,useEffect} from "react";
import "./Home.css";
// import "./share.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Video from "./Video";
// import ShareIcon from "@mui/icons-material/Share";
// import { useState } from "react";
import { motion } from "framer-motion";
import Cliploader from 'react-spinners/BeatLoader'

// import Button from "@mui/material/Button";
// import { useHistory } from "react-router-dom";
// const img = require("./share.png");

// const share = () => {
//   return <>alert("Share this app with your friends");</>;
// };

const Body = () => {
  return (
    <div className="Body">
      
      <section className="element2"></section>

      <div className="title1_parent">
        <h2 className="title1">Reflect on your cravings </h2>
      </div>

      <br />

      <section className="title2">
        <section className="title2a">What role does food </section>

        <section className="title2b">play in your life ?</section>
      </section>

      <div className="answer_1_parent">
        <section className="answer1">
          Take the first step toward understanding your relationship with food{" "}
          and get suggestions and recipes to help nourish your mind and body.
        </section>
      </div>

      <div className="parent1_button">
        <Link to="/q1">
          <button className="btn">Start experience</button>
        </Link>
      </div>
    </div>
  );
};

function Home() {
  console.log(
    "%c What are you doing here ?! you sneaky developer ",
    "color:#05fff2"
  );
  console.log("Check out my Github 👉 https://github.com/ShreeveshKumar");
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: 1 }}
    >
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            height: "100vh", // Set the container height to 100% of viewport height
          }}
        >
          <Cliploader size={30} color={"#0595ff"} loading={loading} />
        </div>
      ) : null}

      <Navbar />
      <Body />
      <Video />
    </motion.div>
  );
}

export default Home;
// export { Navbar, Body };

