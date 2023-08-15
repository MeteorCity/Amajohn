import Item from "./Item";

const ItemRow = ({ cartCount, setCartCount }) => {
  return (
    <div className="items-row">
      <Item cartCount={cartCount} setCartCount={setCartCount} />
      <Item cartCount={cartCount} setCartCount={setCartCount} />
      <Item cartCount={cartCount} setCartCount={setCartCount} />
      <Item cartCount={cartCount} setCartCount={setCartCount} />
    </div>
  );
}
 
export default ItemRow;