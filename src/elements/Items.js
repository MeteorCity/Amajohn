import ItemRow from "./ItemsElems/ItemRow";
import { FaCheckCircle } from "react-icons/fa";
import ItemsCSS from "../CSSFiles/Items.module.css";
import { useState } from "react";

const Items = ({ searchValue, cartItems, setCartItems }) => {
  const [isVisible, setIsVisible] = useState(false);

  const items = [
    {
      name: "Japanese Crayons (20ct), Kids Set, Back to School Supplies, Assorted Colors",
      stars: 4,
      reviews: "1,589",
      price: 5.99,
      delivery: "Tue, Sep 19",
      image: "/images/crayons.png"
    },
    {
      name: "Green Dot Tennis Balls (12ct), Comes in Plastic Bag, Great for Beginners",
      stars: 3.5,
      reviews: "962",
      price: 10.99,
      delivery: "Wed, Sep 13",
      image: "/images/tennis-balls.webp"
    },
    {
      name: "Men's Workout Shorts, Elastic Wasteband, Logo in Bottom Right",
      stars: 5,
      reviews: "40",
      price: 18.99,
      delivery: "Tue, Sep 19",
      image: "/images/men-shorts.webp"
    },
    {
      name: "Wooden Welcome Sign, Easy to Hang, Shows You're a Friendly Person :)",
      stars: 4,
      reviews: "3,495",
      price: 2.99,
      delivery: "Wed, Sep 21",
      image: "/images/welcome-sign.png"
    },
    {
      name: "Refrigerator Attached with Freezer Unit, Includes Filtered Water Dispenser",
      stars: 3.5,
      reviews: "1,736",
      price: 439.99,
      delivery: "Tue, Sep 27",
      image: "/images/fridge.png"
    },
    {
      name: "Rope (36ft), Incredibly Durable, Made of Natural Straw Fibers, Includes Manual",
      stars: 4.5,
      reviews: "135,499",
      price: 6.22,
      delivery: "Thu, Sep 21",
      image: "/images/rope.webp"
    },
    {
      name: "Fake Pumpkins, Comes as a Group of Four, Great for Halloween Decoration",
      stars: 2,
      reviews: "10,029",
      price: 42.98,
      delivery: "Tue, Oct 31",
      image: "/images/pumpkin.webp"
    },
    {
      name: "Chess Board, Wooden and Sleek, Complete Set with Wooden Pieces",
      stars: 5,
      reviews: "166",
      price: 150.99,
      delivery: "Sun, Oct 1",
      image: "/images/chess-board-2.webp"
    }
  ]

  const filtered = items.filter((item) => 
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const fourFiltered = []; // filtered array in groups of four

  for (let i = 0; i <= filtered.length - 4 ; i += 4) {
    fourFiltered.push(filtered.slice(i, i + 4));
  }

  fourFiltered.push(filtered.slice(fourFiltered.length * 4));

  return (
    <div>
      {fourFiltered.map((group, index) => (
        <ItemRow
          cartItems={cartItems}
          setCartItems={setCartItems}
          group={group}
          key={index}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      ))}
      <div className={`${ItemsCSS["added-popup"]} ${ItemsCSS[isVisible ? "is-visible": "not-visible"]}`}>
        <h4 className={ItemsCSS["text-added-popup"]}>Item Added to Cart!</h4>
        <FaCheckCircle className={ItemsCSS["check-mark"]} />
      </div>
    </div>
  );
}
 
export default Items;