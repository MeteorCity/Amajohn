import Item from "./Item";
import ItemsCSS from "../../CSSFiles/Items.module.css";

const ItemRow = ({ cartCount, setCartCount, group }) => {
  return (
    <div className={ItemsCSS["items-row"]}>
      {group.map((item, index) => (
        <Item 
          cartCount={cartCount}
          setCartCount={setCartCount}
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