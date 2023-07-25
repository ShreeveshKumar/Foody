import React from 'react'
// import bg1 from './bg1.jpeg'
// import bg2 from './bg2.jpeg'
import './Back.css'

const item1 = {
  img: "https://openclipart.org/image/100px/268151",
  alt: "item1",
};
const item2 = {
  img: "https://openclipart.org/image/100px/268153",
  alt: "item12",
};
const item3 = {
  img: "https://openclipart.org/image/100px/268152",
  alt: "item3",
};
const item4 = {
  img: "https://openclipart.org/image/100px/268150",
  alt: "item4",
};
const item5 = {
  img: "https://openclipart.org/image/100px/268148",
  alt: "item5",
};
const item6 = {
  img: "https://openclipart.org/image/100px/268147",
  alt: "item6",
};
const item7 = {
  img: "https://openclipart.org/image/100px/268146",
  alt: "item7",
};
const item8 = {
  img: "https://openclipart.org/image/100px/268145",
  alt: "item8",
};
const item9 = {
  img: "https://openclipart.org/image/100px/268144",
  alt: "item9",
};
const item10 = {
  img: "https://openclipart.org/image/100px/268142",
  alt: "item10",
};
const item11 = {
  img: "https://openclipart.org/image/100px/268143",
  alt: "item11",
};
const item12 = {
  img: "https://openclipart.org/image/100px/268149",
  alt: "item12",
};

function Back(props) {
  return (
    <div className="image-grid">
      <img className="half-image" src={item1.img} alt="image1" />
      <img className="half-image" src={item2.img} alt="image2" />
      <img className="half-image" src={item3.img} alt="image1" />
      <img className="half-image" src={item4.img} alt="image2" />
      <img className="half-image" src={item5.img} alt="image1" />
      <img className="half-image" src={item6.img} alt="image2" />
      <img className="half-image" src={item7.img} alt="image1" />
      <img className="half-image" src={item8.img} alt="image2" />
      <img className="half-image" src={item9.img} alt="image1" />
      <img className="half-image" src={item10.img} alt="image2" />
      <img className="half-image" src={item11.img} alt="image1" />
      <img className="half-image" src={item12.img} alt="image2" />
    </div>
  );
}

export default Back
