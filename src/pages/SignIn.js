import { Link } from "react-router-dom";
import { useState } from "react";
import SignInBox from "../elements/SignInElems/SignInBox";
import UnderElems from "../elements/SignInElems/UnderElems";
import Beneath from "../elements/SignInElems/Beneath";

const SignIn = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="sign-in-page">
      <Link to="/" reloadDocument>
        <img className="logo-two" src="/images/amajohn1.png" alt="logo"/>
      </Link>
      <SignInBox inputValue={inputValue} setInputValue={setInputValue}/>
      <UnderElems />
      <Beneath type="email"/>
    </div>
  );
}

export default SignIn;