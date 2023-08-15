import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Item = ({ cartCount, setCartCount }) => {
  const handleAddClick = () => {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="item-container">
      <div className="image-container">
        <img className="item-img" src="/images/crayons.png" alt="Crayons"/>
      </div>
      <div className="item-text-container">
        <h3 className="item-description">
          Japanese Crayons (20ct), Kids Set, Back to School Supplies, Assorted Colors
        </h3>
        <div className="reviews">
          <FaStar className="stars"/>
          <FaStar className="stars"/>
          <FaStar className="stars"/>
          <FaStarHalfAlt className="stars"/>
          <FaRegStar className="stars"/>
          <p>1,589</p>
        </div>
        <h2 className="price">$5.99</h2>
        <p className="delivery-date">{"Delivery "}
          <span style={{fontWeight: "bold", display: "inline-block"}}>Wed, Aug 23</span>
        </p>
        <button className="item-buttons" onClick={handleAddClick}>Add to Cart</button>
        <button className="item-buttons">Buy Now</button>
      </div>
    </div>
  );
}
 
export default Item;