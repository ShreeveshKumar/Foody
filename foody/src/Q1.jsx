import React from 'react'
import Navbar from './Navbar'



const Body = () => {
  return (
    <div>
      <section className="question">
        <h1>How is your mood today ?</h1>
      </section>

      <section className="answer">
        <input type="radio" name="taste" id="salt-radio" />
        <label for="salt-radio">Salt</label>

        <input type="radio" name="taste" id="spicy-radio" />
        <label for="spicy-radio">Spicy</label>

        <input type="radio" name="taste" id="sweet-radio" />
        <label for="sweet-radio">Sweet</label>

        <input type="radio" name="taste" id="bitter-radio" />
        <label for="bitter-radio">Bitter</label>

        <input type="radio" name="taste" id="umami-radio" />
        <label for="umami-radio">Umami</label>
      </section>
    </div>
  );
}



function Q1() {
  return (
    <div>
      <Navbar />
      <Body />

    </div>
  )
}

export default Q1
