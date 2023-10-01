import React from "react";
import Back from "./Back";
// import Back from './Back'
// import _ from "lodash";
import "./Neutral.css";




function share() {
  const link = "https://foody-pvt.vercel.app/";
  navigator.clipboard.writeText(link);
  alert("link copied to clipboard");
}

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
  {
    name: "Maggi",
    description:
      "With its unique blend of flavors and convenient cooking method, Maggi has become a favorite choice for busy individuals and those seeking a tasty treat in a jiffy. ",
    body: "A beloved instant noodle brand, offering quick and delicious meals for all. Its unique flavors and convenience make it a favorite choice worldwide. ",
    imglink: "https://openclipart.org/image/500px/321425",
    imgalt: "Maggi_image",
    link: "https://www.zomato.com/ncr/delivery?dishv2_id=6485",
  },
  {
    name: "Mango",
    description: "King of Fruits",
    body: "Mango, the King of Fruits, entices with its rich sweetness and juicy texture. A tropical delight that tantalizes taste buds and brings a burst of refreshing flavors to every bite.",
    imglink: "https://openclipart.org/image/600px/131485",
    imgalt: "Mango_image",
    link: "https://www.bigbasket.com/pd/10000587/fresho-raw-mango-500-g/?nc=as",
  },
  {
    name: "Chocolate",
    description: "The Ultimate Mood-Booster",
    body: "Chocolate, the ultimate mood-booster, is a delicious treat that can instantly lift your spirits. A bite of this decadent delight is all you need to feel happy and energized. So, indulge in a chocolatey delight and let your worries melt away!",
    imglink: "https://openclipart.org/image/400px/308418",
    imgalt: "Chocolate_image",
    link: "https://www.zomato.com/ncr/delivery?dishv2_id=65419",
  },
  {
    name: "Ice Cream",
    description: "The Perfect Treat for a Happy Day",
    body: "Ice cream, the perfect treat for a happy day, is a delightful dessert that can instantly lift your spirits. A scoop of this creamy delight is all you need to feel happy and energized. So, indulge in a sweet and refreshing ice cream and let your worries melt away!",
    imglink: "https://openclipart.org/image/400px/322326",
    imgalt: "Icecream_image",
    link: "https://www.zomato.com/ncr/delivery?dishv2_id=58693",
  },
];

function Neutral() {
  return (
    <div>
      <Back />
      <Neut />
      {card.map((cooknet) => {
        return (
          <Ndis
            name={cooknet.name}
            description={cooknet.description}
            body={cooknet.body}
            imglink={cooknet.imglink}
            imgalt={cooknet.imgalt}
            link={cooknet.link}

          />
        );
      })}
      ;<button className="nresultshare" onClick={share}>Share</button>
    </div>
  );};

function Neut(){
  return (
    <div className="neutraltop">
      <h2 className="nresult">YOUR RESULTS</h2>
      <h2 className="nresulttitle">NEUTRAL</h2>
      {/* <img src={Laugh} alt="laughing" className="resultimg" /> */}
      <h3 className="nresultbody">
        Explore these mood-balancing foods to maintain your emotional
        equilibrium and foster a sense of calm. Embrace moments of connection
        and warmth, transforming neutral feelings into gentle smiles through
        heartfelt gestures of joy.
      </h3>
      
    </div>
  );
};



function Ndis({name, description, body, imglink, imgalt,link}) {
  return (
    <div>
      <div className="ncard">
        <div className="ncardinfo">
          <h1 className="ncardname">{name}</h1>
          <br />
          <h2 className="ncarddesc">{description}</h2>
          <br />
          <h3 className="ncardbody">{body}</h3>
          <br />
          <a
            href={link}
            className="scardlink"
            
          >
            <h2>Buy now </h2>
          </a>
          <a href="https://www.google.com/" className="ncardar" target="blank">
            <h2>PREVIEW</h2>
          </a>
        </div>
        <div className="ncardimg">
          <img src={imglink} alt={imgalt} className="parent_neutralfood"/>
        </div>
      </div>
    </div>
  );
}
export default Neutral;
