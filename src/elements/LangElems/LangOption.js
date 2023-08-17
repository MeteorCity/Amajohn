import { useState } from "react";
import LangCSS from "../../CSSFiles/Lang.module.css";

const LangOption = ({ lang, clickedButton, setClickedButton }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = () => {
    setIsHovered(true);
  }

  const handleLeave = (e) => {
    setIsHovered(false);
  }

  const handleClick = (e) => {
    const currentButton = e.currentTarget.lastElementChild.innerText;
    setClickedButton(currentButton);
  }

  return (
    <div className={LangCSS["button-lang"]}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      >
      <button
        className={`${LangCSS["circle-button"]}
          ${isHovered ? LangCSS["hovered"] : ""}
          ${clickedButton === lang ? LangCSS["clicked"] : ""}
          `}
      ></button>
      <p>{lang}</p>
    </div>
  );
}
 
export default LangOption;