import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    const path = "/cart";
    navigate(path);
  }

  return (
    <button className="cart-button" onClick={routeChange}>
      <FaShoppingCart className="cart"/>
      <p><strong>Cart</strong></p>
    </button>
  );
}
 
export default CartButton;