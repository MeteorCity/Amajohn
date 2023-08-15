import Currency from "./LangElems/Currency";
import LangOptions from "./LangElems/LangOptions";
import TwoButtons from "./LangElems/TwoButtons";

const LangSettings = ({ isPopup, setIsPopup }) => {
  const handleClick = (e) => {
    if (e.target.closest(".currency-button")) return;
    else {
      setIsPopup(false);
    }
  }

  return (
    <div className="language-page" onClick={handleClick}>
      <LangOptions />
      <Currency isPopup={isPopup} setIsPopup={setIsPopup} />
      <TwoButtons />
    </div>
  );
}
 
export default LangSettings;