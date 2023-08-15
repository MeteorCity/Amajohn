import LangOption from "./LangOption";
import { useState } from "react";

const LangOptions = () => {
  const [clickedButton, setClickedButton] = useState("English - EN");

  return (
    <div className="lang-settings">
      <h2>Language Settings</h2>
      <p className="select-text">
        Select the language you prefer for browsing, shopping, and communications.
      </p>
      <LangOption lang={"English - EN"}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <LangOption lang={"Español - ES"}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <LangOption lang={"Français - FR"}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <LangOption lang={"الترجمة - AR"}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <LangOption lang={"Deutsch - DE"}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <LangOption lang={"תרגום - HE"}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <LangOption lang={"한국어 - KO"}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <LangOption lang={"Português - PT"}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <LangOption lang={"中文 (简体) - ZH"}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <div className="big-break-line"></div>
    </div>
  );
}
 
export default LangOptions;