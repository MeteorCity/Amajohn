import { Link } from "react-router-dom";
import CreateBox from "../elements/SignInElems/CreateBox";
import Beneath from "../elements/SignInElems/Beneath";
import SignInCSS from "../CSSFiles/SignIn.module.css";

const CreateAcc = () => {
  return (
    <div className={SignInCSS["sign-in-page"]}>
      <Link to="/" reloadDocument>
        <img className={SignInCSS["logo-two"]} src="/images/amajohn1.png" alt="logo"/>
      </Link>
      <CreateBox />
      <Beneath />
    </div>
  );
}
 
export default CreateAcc;