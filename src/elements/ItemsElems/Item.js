import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ItemsCSS from "../../CSSFiles/Items.module.css";

const Item = ({ cartCount, setCartCount }) => {
  const handleAddClick = () => {
    setCartCount(cartCount + 1);
  }

  return (
    <div className={ItemsCSS["item-container"]}>
      <div className={ItemsCSS["image-container"]}>
        <img className={ItemsCSS["item-img"]} src="/images/crayons.png" alt="Crayons"/>
      </div>
      <div className={ItemsCSS["item-text-container"]}>
        <h3 className={ItemsCSS["item-description"]}>
          Japanese Crayons (20ct), Kids Set, Back to School Supplies, Assorted Colors
        </h3>
        <div className={ItemsCSS["reviews"]}>
          <FaStar className={ItemsCSS["stars"]}/>
          <FaStar className={ItemsCSS["stars"]}/>
          <FaStar className={ItemsCSS["stars"]}/>
          <FaStarHalfAlt className={ItemsCSS["stars"]}/>
          <FaRegStar className={ItemsCSS["stars"]}/>
          <p>1,589</p>
        </div>
        <h2 className={ItemsCSS["price"]}>$5.99</h2>
        <p className={ItemsCSS["delivery-date"]}>{"Delivery "}
          <span style={{fontWeight: "bold", display: "inline-block"}}>Wed, Aug 23</span>
        </p>
        <button className={ItemsCSS["item-buttons"]} onClick={handleAddClick}>Add to Cart</button>
        <button className={ItemsCSS["item-buttons"]}>Buy Now</button>
      </div>
    </div>
  );
}
 
export default Item;