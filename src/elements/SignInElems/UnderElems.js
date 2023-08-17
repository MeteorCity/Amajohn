import { useNavigate } from "react-router-dom";
import SignInCSS from "../../CSSFiles/SignIn.module.css";

const UnderElems = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("create-account");
  }

  return (
    <div className={SignInCSS["under-elems-container"]}>
      <div className={SignInCSS["line-text-container"]}>
        <div className={SignInCSS["line"]}></div>
        <p className={SignInCSS["new-to-amajohn"]}>New to Amajohn?</p>
        <div className={SignInCSS["line"]}></div>
      </div>
      <button
        className={SignInCSS["create-button"]}
        onClick={handleClick}
      >Create your Amajohn account</button>
    </div>
  );
}
 
export default UnderElems;