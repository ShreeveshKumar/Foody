import React from "react";
import "./Home.css";
import './share.png';

const img = require('./share.png');

const share = () => {
    return (
        <>
        alert("Share this app with your friends");
        </>
    );
}



const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="element1">
          <h1>Foodie</h1>
        </li>
        <li className="element2"><img src={img} alt="share_image" height="30px" width="50px" id="share" onClick={share}/></li>
      </ul>
    </div>
  );
};

const Body = () => {
    return (
        <div>
            <h1>Body</h1>
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
