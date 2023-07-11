import React from "react";
import "./Home.css";
import "./share.png";

const img = require("./share.png");

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="element1">
          <h1>Foodie</h1>
        </li>
        <li className="element2">
          <img
            src={img}
            alt="share_image"
            height="30px"
            width="50px"
            id="share"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
