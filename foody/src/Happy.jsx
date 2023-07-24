import React from 'react'
import './Happy.css'

function Happy() {
  return (
    <div>
      <Result />
      <Card />
    </div>
  )
}


function Result() {
  return (
    <div className='happytop'>
      <h2 className='result'>YOUR RESULTS</h2>
      <h3 className='resultbody'>
        Indulge in these happiness-boosting foods  to take your  <br />joyful mood from
        great to even greater!
      </h3>
      <button className='resultshare'>Share</button>

    </div>
  );
}



function Card ()  {
    return(
      <div>
        <div className='card'>
          <h1>Hello</h1>
        </div>
    </div>
    )
}


export default Happy
