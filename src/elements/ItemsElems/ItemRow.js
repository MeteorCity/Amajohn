import Item from "./Item";
import ItemsCSS from "../../CSSFiles/Items.module.css";

const ItemRow = ({ cartItems, setCartItems, group, isVisible, setIsVisible }) => {
  return (
    <div className={ItemsCSS["items-row"]}>
      {group.map((item, index) => (
        <Item
          cartItems={cartItems}
          setCartItems={setCartItems}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          name={item.name}
          stars={item.stars}
          reviews={item.reviews}
          price={item.price}
          delivery={item.delivery}
          image={item.image}
          key={index}
        />
      ))}
    </div>
  );
}
 
export default ItemRow;