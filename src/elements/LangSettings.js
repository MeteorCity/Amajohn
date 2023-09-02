import Currency from "./LangElems/Currency";
import LangOptions from "./LangElems/LangOptions";
import TwoButtons from "./LangElems/TwoButtons";
import LangCSS from "../CSSFiles/Lang.module.css";
import { useState } from "react";

const LangSettings = ({ isPopup, setIsPopup, clickedButton, setClickedButton }) => {
  const [currencyChoice, setCurrencyChoice] = useState("$ - USD - US Dollar (Default)");

  const handleClick = (e) => {
    if (e.target.closest(`.${LangCSS["currency-button"]}`)) return;
    else {
      setIsPopup(false);
    }
  }

  return (
    <div className={LangCSS["language-page"]} onClick={handleClick}>
      <LangOptions clickedButton={clickedButton} setClickedButton={setClickedButton} />
      <Currency
        isPopup={isPopup}
        setIsPopup={setIsPopup}
        currencyChoice={currencyChoice}
        setCurrencyChoice={setCurrencyChoice}
      />
      <TwoButtons
        clickedButton={clickedButton}
        currencyChoice={currencyChoice}
      />
    </div>
  );
}
 
export default LangSettings;