import { useState } from "react";

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
    <div className="button-lang"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      >
      <button
        className={`circle-button
          ${isHovered ? "hovered" : ""}
          ${clickedButton === lang ? "clicked" : ""}
          `}
      ></button>
      <p>{lang}</p>
    </div>
  );
}
 
export default LangOption;