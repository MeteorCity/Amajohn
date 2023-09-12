import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ItemsCSS from "../../CSSFiles/Items.module.css";

const Item = ({ cartCount, setCartCount, name, stars, reviews, price, delivery, image }) => {
  const navigate = useNavigate();
  const starStr = stars.toString();

  const goldStarsArray = Array.from({length: stars}, (_, index) => (
    <FaStar className={ItemsCSS["stars"]} key={index} />
  ));
  const emptyStarsArray = Array.from({length: 5 - stars}, (_, index) => (
    <FaRegStar className={ItemsCSS["empty-stars"]} key={index} />
  ));

  const exchangeRate = {USD: 1, CLP: 0.0012, ARS: 0.0029, UYU: 0.027, BRL: 0.20,
    EUR: 1.08, GBP: 1.27, JPY: 0.0069, CNY: 0.14, KRW: 0.00076, THB: 0.029,
    NOK: 0.094, MAD: 0.098, MNT: 0.00029, PLN: 0.24
  };

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
    if (!localStorage.getItem("signedIn")) {
      navigate("/sign-in");
    } else {
      // localStorage.setItem("")
      setCartCount(cartCount + 1);
    }
  }

  return (
    <div className={ItemsCSS["item-container"]}>
      <div className={ItemsCSS["image-container"]}>
        <img className={ItemsCSS["item-img"]} src={image} alt="item-img"/>
      </div>
      <div className={ItemsCSS["item-text-container"]}>
        <h3 className={ItemsCSS["item-description"]}>{name}</h3>
        <div className={ItemsCSS["reviews"]}>
          {goldStarsArray.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          {starStr.substr(-2) === ".5" && <FaStarHalfAlt className={ItemsCSS["half-star"]}/>}
          {emptyStarsArray.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          <p style={{ marginLeft: "5px", height: "21px" }}>{reviews}</p>
        </div>
        <h2 className={ItemsCSS["price"]}>
          {findCurrencySymbol(localStorage.getItem("currency"))}
          {(price / exchangeRate[findCurrencyAbbrev(localStorage.getItem("currency"))]).toFixed(2) + " "}
          <span className={ItemsCSS["currency-abbrev"]}>{findCurrencyAbbrev(localStorage.getItem("currency"))}</span>
        </h2>
        <p className={ItemsCSS["delivery-date"]}>{"Delivery "}
          <span style={{fontWeight: "bold", display: "inline-block"}}>{delivery}</span>
        </p>
        <button className={ItemsCSS["item-buttons"]} onClick={handleAddClick}>Add to Cart</button>
        <button className={ItemsCSS["item-buttons"]}>Buy Now</button>
      </div>
    </div>
  );
}
 
export default Item;