import CartCSS from "../CSSFiles/Cart.module.css"
import Header from "../elements/Header";
import CartItem from "../elements/CartElems/CartItem";
import { useState } from "react";

const Cart = ({ cartItems, findCurrencySymbol, findCurrencyAbbrev, exchangeRate }) => {
  // removes duplicates from list
  for (let i = cartItems.length-1; i >= 0; i--) {
    for (let j = i-1; j >= 0; j--) {
      if (cartItems[i].name === cartItems[j].name) {
        cartItems.splice(i, 1);
        break;
      }
    }
  }
  
  const cartQtys = {};

  // add items to quantities dictionary
  for (const item of cartItems) {
    cartQtys[item.name] = 1;
  }

  const [cartItemQtys, setCartItemQtys] = useState(cartQtys);
  const [cartItemsState, setCartItemsState] = useState(cartItems);

  const currSymbol = findCurrencySymbol(localStorage.getItem("currency"));
  const currAbbrev = findCurrencyAbbrev(localStorage.getItem("currency"));
  let subTotalPrice = 0;

  for (const item of cartItems) {
    subTotalPrice += (item.price * cartItemQtys[item.name]);
  }

  const tax = subTotalPrice * 0.08;
  const totalPrice = subTotalPrice + tax;

  return (
    <div>
      <Header />
      <div className={CartCSS["cart-content"]}>
        <div className={CartCSS["cart-items"]}>
          <h2 className={CartCSS["shopping-cart-text"]}>Shopping Cart</h2>
          <div className={CartCSS["cart-break-line"]}></div>
          {cartItemsState.length !== 0 ? cartItemsState.map((item, idx) => (
            <CartItem
              cartItemsState={cartItemsState}
              setCartItemsState={setCartItemsState}
              item={item}
              key={idx}
              findCurrencySymbol={findCurrencySymbol}
              findCurrencyAbbrev={findCurrencyAbbrev}
              exchangeRate={exchangeRate}
              cartItemQtys={cartItemQtys}
              setCartItemQtys={setCartItemQtys}
            />
          )) : <p style={{marginLeft: "25px", marginTop: "10px"}}>Cart is empty</p>}
        </div>
        <div className={CartCSS["total-overview"]}>
          <p className={CartCSS["subtotal"]}>{`Subtotal (${cartItemsState.length} items): `}
            <strong>{(subTotalPrice / exchangeRate[currAbbrev]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
          </p>
          <p className={CartCSS["tax"]}>{"Tax (8%): "}
            <strong>{(tax / exchangeRate[currAbbrev]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
          </p>
          <div className={CartCSS["cart-break-line"]}></div>
          <p className={CartCSS["total"]}>{"Total: "}
            <strong>{currSymbol + (totalPrice / exchangeRate[currAbbrev]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " " + currAbbrev}</strong>
          </p>
          <button className={CartCSS["buy-btn"]}>Buy Items</button>
        </div>
      </div>
    </div>
  );
}
 
export default Cart;