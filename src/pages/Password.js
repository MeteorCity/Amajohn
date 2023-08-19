// THIS PAGE IS JUST AN EXTENSION OF THE SIGNIN PAGE BUT I DON'T WANT TO FUCK
// THINGS UP BY CHANGING THE FILE THAT IT'S IN

import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Beneath from "../elements/SignInElems/Beneath";
import PassBox from "../elements/SignInElems/PassBox";
import SignInCSS from "../CSSFiles/SignIn.module.css";

const Password = () => {
  const navigate = useNavigate();
  const location = useLocation();

  {/* if user manually enters url*/}
  useEffect(() => {
    if (!location.state) {
      navigate("/sign-in", {replace: true});
    }
  }, [navigate, location.state]);

  const account = location.state;

  return (
    <div className={SignInCSS["sign-in-page"]}>
      <Link to="/" reloadDocument>
        <img className={SignInCSS["logo-two"]} src="/images/amajohn1.png" alt="logo"/>
      </Link>
      {account && <PassBox account={account} />} {/* if user manually enters url*/}
      <Beneath />
    </div>
  );
}
 
export default Password;