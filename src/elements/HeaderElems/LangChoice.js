import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeaderCSS from "../../CSSFiles/Header.module.css";

const LangChoice = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    const path = "/language-preference";
    navigate(path);
  }

  return (
    <button className={HeaderCSS["lang-choice"]} onClick={routeChange}>
      <img className={HeaderCSS["us-flag"]} src="/images/usa-flag.avif" alt="flag"/>
      <p><strong>EN</strong></p>
      <FaCaretDown />
    </button>
  );
}
 
export default LangChoice;