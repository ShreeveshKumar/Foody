import React from "react";
import "./Home.css";
// import "./share.png";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// const img = require("./share.png");


// const share = () => {
//   return <>alert("Share this app with your friends");</>;
// };

const Body = () => {
  return (
    <div
      className="Body"
      style={{
        backgroundImage: `url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-menu-ads-design-template-e55cd7f8510afa8a64047e4385266093_screen.jpg?ts=1644221484" )`,
        height: "100%",
        width: "100%",
      }}
    >
      <h1>Reflect on your cravings </h1>

      <section className="question">
        <h1>What role does </h1>
        <h1>food play in your life ?</h1>
      </section>

      <section className="answer">
        <h3>
          Take the first step toward understanding your relationship with food{" "}
          <br /> and get suggestions and recipes to help nourish your mind and
          body{" "}
        </h3>
      </section>
      {/* <Link to="/q1"> */}
      <button className="btn">Get Started</button>
      {/* </Link> */}
    </div>
  );
};

function Home() {
  return (
    <div>
      <Navbar />
      <Body />
      
    </div>
  );
}

export default Home;
// export { Navbar, Body };