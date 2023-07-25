import React from "react";
import "./Happy.css";
// import Laugh from "./Laugh.png";
import Back from "./Back.jsx";
// import {Link} from 'react-router-dom'

const firstcard = {
  name: "Pizza",
  description: "Indulge in the flavours of Pizza",
  body: "Ever every moment without distractions. With a single bite, Pizza mode satisfies craving while keeping you focused on experience. By selecting your favourite toppings. Pizza mode minimizes interuptions and enhance your enjoyment. You can even set a pizza schedule to indulge automatically. ",
  imglink: "https://openclipart.org/image/600px/25221",
  imgalt: "imageofpizza",
};

const secondcard = {
  name: "Cake",
  description: "Experience the indulgent flavors of Velvet Delight.",
  body: "Savor every moment without distractions with our irresistible Velvet Delight cake. With every delightful bite, Velvet Delight takes your taste buds on a journey of pure bliss, leaving you wanting more. Crafted with the finest ingredients and a touch of magic, this cake satisfies your cravings while keeping you fully immersed in the experience.",
  imglink: "https://openclipart.org/image/600px/271952",
  imgalt: "imageofcake",
};

function Happy() {
  return (
    <div>
      <Back />
      <Result />
      <Card
        name={firstcard.name}
        description={firstcard.description}
        body={firstcard.body}
        imglink={firstcard.imglink}
        imgalt={firstcard.imgalt}
      />
      <Card
        name={secondcard.name}
        description={secondcard.description}
        body={secondcard.body}
        imglink={secondcard.imglink}
        imgalt={secondcard.imgalt}
      />
    </div>
  );
}

function Result() {
  return (
    <div className="happytop">
      <h2 className="result">YOUR RESULTS</h2>
      <h2 className="resulttitle">HAPPY</h2>
      {/* <img src={Laugh} alt="laughing" className="resultimg" /> */}
      <h3 className="resultbody">
        Indulge in these happiness-boosting foods to take your <br />
        joyful mood from great to even greater!
      </h3>
      <button className="resultshare">Share</button>
    </div>
  );
}

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="cardinfo">
          <h1 className="cardname">{props.name}</h1>
          <br />
          <h2 className="carddesc">{props.description}</h2>
          <br />
          <h3 className="cardbody">{props.body}</h3>
          <br />
          <a href="https://www.google.com/" className="cardlink" target="blank">
            <h2>Buy now </h2>
          </a>
        </div>
        <div className="cardimg">
          <img
            src={props.imglink}
            alt={props.imgalt}
          />
        </div>
      </div>
    </div>
  );
}

export default Happy;
