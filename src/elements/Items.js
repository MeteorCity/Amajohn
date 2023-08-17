import ItemRow from "./ItemsElems/ItemRow";

const Items = ({ cartCount, setCartCount }) => {
  return (
    <ItemRow cartCount={cartCount} setCartCount={setCartCount}/>
  );
}
 
export default Items;