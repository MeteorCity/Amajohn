import Header from "../elements/Header";
import LangSettings from "../elements/LangSettings";
import { useState } from "react";

const LangPref = () => {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <>
      <Header setIsPopup={setIsPopup}/>
      <LangSettings isPopup={isPopup} setIsPopup={setIsPopup}/>
    </>
  );
}
 
export default LangPref;