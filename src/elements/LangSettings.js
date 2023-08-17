import Currency from "./LangElems/Currency";
import LangOptions from "./LangElems/LangOptions";
import TwoButtons from "./LangElems/TwoButtons";
import LangCSS from "../CSSFiles/Lang.module.css";


const LangSettings = ({ isPopup, setIsPopup }) => {
  const handleClick = (e) => {
    console.log(e.target);
    if (e.target.closest(`.${LangCSS["currency-button"]}`)) return;
    else {
      setIsPopup(false);
    }
  }

  return (
    <div className={LangCSS["language-page"]} onClick={handleClick}>
      <LangOptions />
      <Currency isPopup={isPopup} setIsPopup={setIsPopup} />
      <TwoButtons />
    </div>
  );
}
 
export default LangSettings;