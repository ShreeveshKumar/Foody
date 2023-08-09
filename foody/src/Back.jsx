import React from "react";
// import bg1 from './bg1.jpeg'
// import bg2 from './bg2.jpeg'
import "./Back.css";

const items = [
  {
    img: "https://openclipart.org/image/100px/268151",
    alt: "item1",
  },
  {
    img: "https://openclipart.org/image/100px/268153",
    alt: "item12",
  },
  {
    img: "https://openclipart.org/image/100px/268152",
    alt: "item3",
  },
  {
    img: "https://openclipart.org/image/100px/268150",
    alt: "item4",
  },
  {
    img: "https://openclipart.org/image/100px/268148",
    alt: "item5",
  },
  {
    img: "https://openclipart.org/image/100px/268147",
    alt: "item6",
  },
  {
    img: "https://openclipart.org/image/100px/268146",
    alt: "item7",
  },
  {
    img: "https://openclipart.org/image/100px/268145",
    alt: "item8",
  },
  {
    img: "https://openclipart.org/image/100px/268144",
    alt: "item9",
  },
  {
    img: "https://openclipart.org/image/100px/268142",
    alt: "item10",
  },
  {
    img: "https://openclipart.org/image/100px/268143",
    alt: "item11",
  },
  {
    img: "https://openclipart.org/image/100px/268149",
    alt: "item12",
  },
];

function Back(props) {
  return (
    <div className="image-grid">
      {items.map((product) => {
        return (
          <img className="half-image" src={product.img} alt={product.alt} />
        );
      })}
    </div>
  );
}

export default Back;
