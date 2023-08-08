import React from 'react'
import Back from './Back'
// import Back from './Back'
// import _ from "lodash";

const card = [
  {
    name: "Pizza",
    description: "Indulge in the flavours of Pizza",
    body: "Ever every moment without distractions. With a single bite, Pizza mode satisfies craving while keeping you focused on experience. By selecting your favourite toppings. Pizza mode minimizes interuptions and enhance your enjoyment. You can even set a pizza schedule to indulge automatically. ",
    imglink: "https://openclipart.org/image/600px/25221",
    imgalt: "imageofpizza",
  },

  {
    name: "Cake",
    description: "Experience the indulgent flavors of Velvet Delight.",
    body: "Savor every moment without distractions with our irresistible Velvet Delight cake. With every delightful bite, Velvet Delight takes your taste buds on a journey of pure bliss, leaving you wanting more. Crafted with the finest ingredients and a touch of magic, this cake satisfies your cravings while keeping you fully immersed in the experience.",
    imglink: "https://openclipart.org/image/600px/271952",
    imgalt: "imageofcake",
  },

  {
    name: "Rasgulla",
    description: "Experience the Magical Flavors of Soft Sweetness",
    body: "The magic lies in the meticulous blend of traditional rasgulla essence and modern baking techniques. The result is a masterpiece that not only satisfies your cravings but also transports you to a world of delightful wonder.",
    imglink:
      "https://media.istockphoto.com/id/495022082/photo/indian-sweet-rasgulla-is-a-syrupy-dessert-indian-cottage-cheese.webp?b=1&s=612x612&w=0&k=20&c=TSpoDZ-UUnja-OnuoIPDNE_fpVJjmFVAmDAy7dv9slw=",
    imgalt: "imageofrasgulla",
  },
  {
    name: "Apple",
    description: "Your Mood-Boosting Superfruit",
    body: "Crunch into a juicy apple and feel your spirits soar! Nature's delightful gift, the apple, is not only a savior for your taste buds but also a secret weapon for mood-boosting magic. Packed with natural goodness, every bite of this vibrant superfruit sparks joy and refreshes your senses. So, take a wholesome and delicious journey to a happier you with the magnificent apple! 🍎🌞🌈",
    imglink: "https://openclipart.org/image/600px/168476",
    imgalt: "imageofapple",
  },
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
  }
];




function Neutral() {
  return (
    <div>
        <Back />
        {/* {const randomSelection = _.sampleSize(food, 5); */}
        {/* } */}
    </div>
  )
}



export default Neutral
