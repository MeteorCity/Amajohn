import { useNavigate } from "react-router-dom";
import LangCSS from "../../CSSFiles/Lang.module.css";

const TwoButtons = ({ clickedButton, currencyChoice }) => {
  let navigate = useNavigate();
  const makeChanges = () => {
    localStorage.setItem("language", clickedButton.slice(-2));
    localStorage.setItem("currency", currencyChoice);
    console.log(localStorage.getItem("currency"));
    navigate("/");
  }

  return (
    <div className={LangCSS["two-buttons"]}>
      <button className={LangCSS["cancel-button"]} onClick={() => navigate("/")}>Cancel</button>
      <button className={LangCSS["apply-changes-button"]} onClick={makeChanges}>Apply Changes</button>
    </div>
  );
}
 
export default TwoButtons;