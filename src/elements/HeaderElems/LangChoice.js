import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeaderCSS from "../../CSSFiles/Header.module.css";

const LangChoice = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/language-preference");
  }

  return (
    <button className={HeaderCSS["lang-choice"]} onClick={handleClick}>
      <img
        className={HeaderCSS["country-flag"]}
        src={`/images/${localStorage.getItem("language")}-flag.webp`}
        alt="flag"/>
      <p><strong>{localStorage.getItem("language")}</strong></p>
      <FaCaretDown />
    </button>
  );
}
 
export default LangChoice;