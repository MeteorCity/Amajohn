import CartCSS from "../../CSSFiles/Cart.module.css";

const CartItem = ({ cartItemsState, setCartItemsState, item, findCurrencySymbol, findCurrencyAbbrev, exchangeRate, cartItemQtys, setCartItemQtys }) => {
  const currSymbol = findCurrencySymbol(localStorage.getItem("currency"));
  const currAbbrev = findCurrencyAbbrev(localStorage.getItem("currency"));
  const price = (item.price / exchangeRate[currAbbrev]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handlePlusClick = () => {
    const newCartQtys = {...cartItemQtys};
    newCartQtys[item.name]++;
    setCartItemQtys(newCartQtys);
  }

  const handleMinusClick = () => {
    const newCartQtys = {...cartItemQtys};
    if (newCartQtys[item.name] !== 1) {
      newCartQtys[item.name]--;
    }
    setCartItemQtys(newCartQtys);
  }

  const handleDeleteClick = () => {
    const filteredItems = cartItemsState.filter((cartItem) => {
      return cartItem.name !== item.name;
    });
    setCartItemsState(filteredItems);
    const newCartQtys = {...cartItemQtys};
    newCartQtys[item.name] = 0;
    setCartItemQtys(newCartQtys);
    localStorage.setItem("cartItems", JSON.stringify(filteredItems));
  }

  return (
    <div>
      <div className={CartCSS["cart-item"]}>
        <img src={item.image} className={CartCSS["cart-item-img"]} alt="item" />
        <div className={CartCSS["cart-item-text"]}>
          <p className={CartCSS["cart-item-name"]}>{item.name}</p>
          <h3>{currSymbol + price + " " + currAbbrev}</h3>
          <p className={CartCSS["deliver-by-text"]}>{"Delivery by "}
            <strong>{item.delivery}</strong>
          </p>
          <div className={CartCSS["bottom-txts"]}>
            <p className={CartCSS["qty-text"]}>{"Quantity: "}
              <strong>{cartItemQtys[item.name]}</strong>
            </p>
            <button className={CartCSS["qty-change-btns"]} onClick={handlePlusClick}>+</button>
            <button className={CartCSS["qty-change-btns"]} onClick={handleMinusClick}>-</button>
            <p className={CartCSS["delete-btn"]} onClick={handleDeleteClick}>Delete this item</p>
          </div>
        </div>
      </div>
      <div className={CartCSS["cart-break-line"]}></div>
    </div>
  );
}
 
export default CartItem;