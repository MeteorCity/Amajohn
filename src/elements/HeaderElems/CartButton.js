import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeaderCSS from "../../CSSFiles/Header.module.css";

const CartButton = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    const path = "/cart";
    navigate(path);
  }

  return (
    <button className={HeaderCSS["cart-button"]} onClick={routeChange}>
      <FaShoppingCart className={HeaderCSS["cart"]}/>
      <p><strong>Cart</strong></p>
    </button>
  );
}
 
export default CartButton;