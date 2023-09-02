import { FaAngleDown } from "react-icons/fa";
import CurrPopup from "./CurrPopup";
import LangCSS from "../../CSSFiles/Lang.module.css";

const Currency = ({ isPopup, setIsPopup, currencyChoice, setCurrencyChoice }) => {
  return (
    <div className={LangCSS["currency-settings"]}>
      <h2>Currency Settings</h2>
      <p className={LangCSS["select-text"]}>Select the currency you want to shop with.</p>
      <button className={LangCSS["currency-button"]} onClick={() => setIsPopup(true)}>
        <p>{currencyChoice}</p>
        <FaAngleDown className={LangCSS["down-angle"]}/>
      </button>
      <div className={LangCSS["big-break-line"]}></div>
      {isPopup && <CurrPopup setCurrencyChoice={setCurrencyChoice}/>}
    </div>
  );
}
 
export default Currency;