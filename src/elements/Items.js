import ItemRow from "./ItemsElems/ItemRow";
import "../CSSFiles/Items.css";

const Items = ({ cartCount, setCartCount }) => {
  return (
    <ItemRow cartCount={cartCount} setCartCount={setCartCount}/>
  );
}
 
export default Items;