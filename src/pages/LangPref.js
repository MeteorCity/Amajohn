import Header from "../elements/Header";
import LangSettings from "../elements/LangSettings";
import { useState } from "react";

const LangPref = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [clickedButton, setClickedButton] = useState("English - EN");

  return (
    <>
      <Header setIsPopup={setIsPopup}/>
      <LangSettings
        isPopup={isPopup}
        setIsPopup={setIsPopup}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
    </>
  );
}
 
export default LangPref;