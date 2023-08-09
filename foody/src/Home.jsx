import React from "react";
import "./Home.css";
// import "./share.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Video from "./Video";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import { motion } from "framer-motion";

// import Button from "@mui/material/Button";
// import { useHistory } from "react-router-dom";
// const img = require("./share.png");

// const share = () => {
//   return <>alert("Share this app with your friends");</>;
// };

const Body = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyLink = () => {
    const link = "https://example.com"; // Replace with your desired link

    navigator.clipboard
      .writeText(link)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
      });
  };
  return (
    <div className="Body">
      <section className="element2">
        <ShareIcon />
      </section>
      <h2 className="title1">Reflect on your cravings </h2>

      {/* <section className="title2"> */}
      <section className="title2a">What role does food </section>
      <section className="title2b">play in your life ?</section>
      {/* </section> */}

      <section className="answer1">
        Take the first step toward understanding your relationship with food{" "}
        <br /> and get suggestions and recipes to help nourish your mind and
        body.
      </section>
      <Link to="/q1">
        <button className="btn" onClick={handleCopyLink}>
          Start experience
        </button>
        {isCopied && <p>Link copied!</p>}
      </Link>
    </div>
  );
};

function Home() {
  return (
    <motion.div
    intial={{opacity:0}} 
    animate={{opacity:1}}
    exit={{opacity:0, transition:1}}
    >
      <Navbar className="navibars"/>
      <Body />
      <Video />
    </motion.div>
  );
}

export default Home;
// export { Navbar, Body };

