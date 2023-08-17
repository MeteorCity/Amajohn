import { useNavigate } from "react-router-dom";
import LangCSS from "../../CSSFiles/Lang.module.css";

const TwoButtons = () => {
  let navigate = useNavigate();
  const goHomeRoute = () => {
    navigate("/");
  }

  return (
    <div className={LangCSS["two-buttons"]}>
      <button className={LangCSS["cancel-button"]} onClick={goHomeRoute}>Cancel</button>
      <button className={LangCSS["apply-changes-button"]} onClick={goHomeRoute}>Apply Changes</button>
    </div>
  );
}
 
export default TwoButtons;