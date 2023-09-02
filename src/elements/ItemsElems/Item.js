import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ItemsCSS from "../../CSSFiles/Items.module.css";

const Item = ({ cartCount, setCartCount }) => {
  const exchangeRate = {USD: 1, CLP: 0.0012, ARS: 0.0029, UYU: 0.027, BRL: 0.20,
    EUR: 1.08, GBP: 1.27, JPY: 0.0069, CNY: 0.14, KRW: 0.00076, THB: 0.029,
    NOK: 0.094, MAD: 0.098, MNT: 0.00029, PLN: 0.24
  }

  const findCurrencyAbbrev = (currency) => {
    const letterPattern = /[A-Z]{3}/;
    return currency.match(letterPattern)[0];
  }

  const findCurrencySymbol = (currency) => {
    const symbolPattern = /[$€£¥₩]/;
    const symbol = currency.match(symbolPattern);
    return (symbol ? symbol[0] : "");
  }

  const handleAddClick = () => {
    setCartCount(cartCount + 1);
  }

  return (
    <div className={ItemsCSS["item-container"]}>
      <div className={ItemsCSS["image-container"]}>
        <img className={ItemsCSS["item-img"]} src="/images/crayons.png" alt="Crayons"/>
      </div>
      <div className={ItemsCSS["item-text-container"]}>
        <h3 className={ItemsCSS["item-description"]}>
          Japanese Crayons (20ct), Kids Set, Back to School Supplies, Assorted Colors
        </h3>
        <div className={ItemsCSS["reviews"]}>
          <FaStar className={ItemsCSS["stars"]}/>
          <FaStar className={ItemsCSS["stars"]}/>
          <FaStar className={ItemsCSS["stars"]}/>
          <FaStarHalfAlt className={ItemsCSS["stars"]}/>
          <FaRegStar className={ItemsCSS["stars"]}/>
          <p>1,589</p>
        </div>
        <h2 className={ItemsCSS["price"]}>
          {findCurrencySymbol(localStorage.getItem("currency"))}
          {(5.99 / exchangeRate[findCurrencyAbbrev(localStorage.getItem("currency"))]).toFixed(2) + " "}
          <span className={ItemsCSS["currency-abbrev"]}>{findCurrencyAbbrev(localStorage.getItem("currency"))}</span>
        </h2>
        <p className={ItemsCSS["delivery-date"]}>{"Delivery "}
          <span style={{fontWeight: "bold", display: "inline-block"}}>Wed, Aug 23</span>
        </p>
        <button className={ItemsCSS["item-buttons"]} onClick={handleAddClick}>Add to Cart</button>
        <button className={ItemsCSS["item-buttons"]}>Buy Now</button>
      </div>
    </div>
  );
}
 
export default Item;