import React from 'react'
import Back from './Back'
import './Sad.css'



function Sad() {
  return (
    <div>
      <Back className="cookingfood" />
      <Result />
      {foodsad.map((cook) => {
        return (
          <Card
            name={cook.name}
            description={cook.description}
            body={cook.body}
            imglink={cook.imglink}
            imgalt={cook.imgalt}
          />
        );
      })}
      <button className="resultshare">Share</button>
    </div>
  );
}

function Result() {
  return (
    <div className="sadtop">
      <h2 className="sresult">YOUR RESULTS</h2>
      <h2 className="sresulttitle">SAD</h2>
      {/* <img src={Laugh} alt="laughing" className="resultimg" /> */}
      <h3 className="sresultbody">
        Indulge in these happiness-boosting foods to take your <br />
        joyful mood from great to even greaterEmbrace joy with heartwarming
        gestures, turning sadness to smiles in heartening moments of connection.
      </h3>
      
    </div>
  );
}

const foodsad = [
  {
    name: "Maggi",
    description:
      "With its unique blend of flavors and convenient cooking method, Maggi has become a favorite choice for busy individuals and those seeking a tasty treat in a jiffy. ",
    body: "A beloved instant noodle brand, offering quick and delicious meals for all. Its unique flavors and convenience make it a favorite choice worldwide. ",
    imglink: "https://openclipart.org/image/600px/321425",
    imgalt: "Maggi_image",
  },
  {
    name: "Mango",
    description: "King of Fruits",
    body: "Mango, the King of Fruits, entices with its rich sweetness and juicy texture. A tropical delight that tantalizes taste buds and brings a burst of refreshing flavors to every bite.",
    imglink: "https://openclipart.org/image/600px/131485",
    imgalt: "Mango_image",
  },
  {
    name: "Chocolate",
    description: "The Ultimate Mood-Booster",
    body: "Chocolate, the ultimate mood-booster, is a delicious treat that can instantly lift your spirits. A bite of this decadent delight is all you need to feel happy and energized. So, indulge in a chocolatey delight and let your worries melt away!",
    imglink: "https://openclipart.org/image/600px/308418",
    imgalt: "Chocolate_image",
  },
  {
    name: "Ice Cream",
    description: "The Perfect Treat for a Happy Day",
    body: "Ice cream, the perfect treat for a happy day, is a delightful dessert that can instantly lift your spirits. A scoop of this creamy delight is all you need to feel happy and energized. So, indulge in a sweet and refreshing ice cream and let your worries melt away!",
    imglink: "https://openclipart.org/image/600px/322326",
    imgalt: "Icecream_image",
  },
];



function Card({ name, description, body, imglink, imgalt }) {
  console.log("hi");
  return (
    <div>
      {/* <div className="preview">
        <button className="cardpreview">Share</button>
      </div> */}
      <div className="scard">
        <div className="scardinfo">
          <h1 className="scardname">{name}</h1>
          <br />
          <h2 className="scarddesc">{description}</h2>
          <br />
          <h3 className="scardbody">{body}</h3>
          <br />
          <a
            href="https://www.google.com/"
            className="scardlink"
            target="blank"
          >
            <h2>Buy now </h2>
          </a>
        </div>
        <div className="scardimg">
          <img src={imglink} alt={imgalt} />
        </div>
        
          <button className='button1000'> 🎞️ PREVIEW </button>
        </div>
      </div>
    
  );
}






export default Sad
