import React from "react";
import "./Home.css";
import "./share.png";
import './Navbar.css';
import ShareIcon from '@mui/icons-material/Share';
// import Video from "./Video";
// const img = require("./share.png");

const Navbar = () => {
  return (
    <div className="nav">
      <span className="maintitle">Foodie</span>
      <span><ShareIcon /></span>     
    </div>
  );
};

export default Navbar;
