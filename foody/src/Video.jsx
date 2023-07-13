import React from 'react'
import commercial from "./commercial.mp4";
import './Home.css'

function Video() {
  return (
    <div>
      <video src={commercial} autoPlay loop muted />
    </div>
  )
}

export default Video
