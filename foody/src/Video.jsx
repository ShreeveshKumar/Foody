import React from 'react'
import commercial from "./commercial.mp4";
// import './Home.css'
import './Video.css'
// import Cliploader from 'react-spinners/BeatLoader'

function Video() {
  
  return (
    <div className="backcover">
      <video src={commercial} autoPlay loop muted />
    </div>
  );
}

export default Video
