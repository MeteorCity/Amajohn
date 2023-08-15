import { FaAngleDown } from "react-icons/fa";
import CurrPopup from "./CurrPopup";
import { useState } from "react";

const Currency = ({ isPopup, setIsPopup }) => {
  const [currencyChoice, setCurrencyChoice] = useState("$ - USD - US Dollar (Default)")

  return (
    <div className="currency-settings">
      <h2>Currency Settings</h2>
      <p className="select-text">Select the currency you want to shop with.</p>
      <button className="currency-button" onClick={() => setIsPopup(true)}>
        <p>{currencyChoice}</p>
        <FaAngleDown className="down-angle"/>
      </button>
      <div className="big-break-line"></div>
      {isPopup && <CurrPopup setCurrencyChoice={setCurrencyChoice}/>}
    </div>
  );
}
 
export default Currency;