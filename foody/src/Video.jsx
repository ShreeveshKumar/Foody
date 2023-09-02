import React from 'react'
import commercial from "./commercial.mp4";
// import './Home.css'
import './Video.css'

function Video() {
  return (
    <div className='backcover'>
      <video src={commercial} autoPlay loop muted controls loading="lazy" />
    </div>
  )
}

export default Video
