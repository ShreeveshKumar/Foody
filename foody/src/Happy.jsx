import React from "react";
import "./Happy.css";
// import Laugh from "./Laugh.png";
import Back from "./Back.jsx";
// import {Link} from 'react-router-dom'

const card = [
  {
    name: "Pizza",
    description: "Indulge in the flavours of Pizza",
    body: "Ever every moment without distractions. With a single bite, Pizza mode satisfies craving while keeping you focused on experience. By selecting your favourite toppings. Pizza mode minimizes interuptions and enhance your enjoyment. You can even set a pizza schedule to indulge automatically. ",
    imglink: "https://openclipart.org/image/600px/25221",
    imgalt: "imageofpizza",
    link: "https://www.zomato.com/ncr/delivery?dishv2_id=68987",
  },

  {
    name: "Cake",
    description: "Experience the indulgent flavors of Velvet Delight.",
    body: "Savor every moment without distractions with our irresistible Velvet Delight cake. With every delightful bite, Velvet Delight takes your taste buds on a journey of pure bliss, leaving you wanting more. Crafted with the finest ingredients and a touch of magic, this cake satisfies your cravings while keeping you fully immersed in the experience.",
    imglink: "https://openclipart.org/image/400px/271952",
    imgalt: "imageofcake",
    link: "https://www.zomato.com/ncr/delivery?dishv2_id=39212",
  },

  {
    name: "Rasgulla",
    description: "Experience the Magical Flavors of Soft Sweetness",
    body: "The magic lies in the meticulous blend of traditional rasgulla essence and modern baking techniques. The result is a masterpiece that not only satisfies your cravings but also transports you to a world of delightful wonder.",
    imglink:
      "https://us.123rf.com/450wm/indianfoodimages/indianfoodimages1809/indianfoodimages180900316/108572680-indian-rasgulla-or-dry-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.jpg?ver=6",
    imgalt: "imageofrasgulla",
    link: "https://www.zomato.com/ncr/delivery?dishv2_id=12096",
  },
  {
    name: "Apple",
    description: "Your Mood-Boosting Superfruit",
    body: "Crunch into a juicy apple and feel your spirits soar! Nature's delightful gift, the apple, is not only a savior for your taste buds but also a secret weapon for mood-boosting magic. Packed with natural goodness, every bite of this vibrant superfruit sparks joy and refreshes your senses. So, take a wholesome and delicious journey to a happier you with the magnificent apple! 🍎🌞🌈",
    imglink: "https://openclipart.org/image/400px/168476",
    imgalt: "imageofapple",
    link: "https://blinkit.com/prn/small-shimla-apple-seb/prid/338977",
  },
];

function share() {
  const link = "https://foody-pvt.vercel.app/";
  navigator.clipboard.writeText(link);
  alert("link copied to clipboard");
}

function Happy() {
  return (
    <div>
      <Back />
      <button className="resultshare" onClick={share}>Share</button>
      <Result />

      {card.map((cook) => {
        return (
          <Card
            name={cook.name}
            description={cook.description}
            body={cook.body}
            imglink={cook.imglink}
            imgalt={cook.imgalt}
            link={cook.link}
          />
        );
      })}
    </div>
  );
}

function Result() {
  return (
    <div className="hhappytop">
      <h2 className="result">YOUR RESULTS</h2>
      <h2 className="resulttitle">HAPPY</h2>
      {/* <img src={Laugh} alt="laughing" className="resultimg" /> */}
      <h3 className="resultbody">
        Indulge in these happiness-boosting foods to take your <br />
        joyful mood from great to even greater!
      </h3>
      
    </div>
  );
}



function Card({ name, description, body, imglink, imgalt,link }) {
  console.log("hi");
  return (
    <div class="parent_card">
      
      {/* <div className="preview">
        <button className="cardpreview">Share</button>
      </div> */}


      <div className="card">


         <div className="cardinfo">
          <h1 className="cardname">{name}</h1>
          <br />
          <h2 className="carddesc">{description}</h2>
          <br />
          <h3 className="cardbody">{body}</h3>
          <br />
          <a href={link} className="cardlink" target="blank">
            <h2>Buy now </h2>
          </a>
          <a href="https://www.google.com/" className="hcardar" target="blank"><h2>PREVIEW</h2></a>
        </div>


        <div className="cardimg">
          <img src={imglink} alt={imgalt} className="food_image_parent"/>
        </div>

      </div>
    </div>
  );
}

export default Happy;
