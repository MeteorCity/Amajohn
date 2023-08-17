import Item from "./Item";
import ItemsCSS from "../../CSSFiles/Items.module.css";

const ItemRow = ({ cartCount, setCartCount }) => {
  return (
    <div className={ItemsCSS["items-row"]}>
      <Item cartCount={cartCount} setCartCount={setCartCount} />
      <Item cartCount={cartCount} setCartCount={setCartCount} />
      <Item cartCount={cartCount} setCartCount={setCartCount} />
      <Item cartCount={cartCount} setCartCount={setCartCount} />
    </div>
  );
}
 
export default ItemRow;