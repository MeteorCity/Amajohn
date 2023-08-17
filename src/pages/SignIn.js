import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SignInBox from "../elements/SignInElems/SignInBox";
import UnderElems from "../elements/SignInElems/UnderElems";
import Beneath from "../elements/SignInElems/Beneath";
import SignInCSS from "../CSSFiles/SignIn.module.css";

const SignIn = ({ signInputValue, setSignInputValue }) => {
  const API_URL = "http://localhost:3500/accounts";
  const [accData, setAccData] = useState([]);

  useEffect(() => {
    const fetchAccs = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error;
        const accounts = await response.json();
        setAccData(accounts);
      } catch {
        console.log("Error fetching data");
      }
    }

    fetchAccs();
  }, [])

  return (
    <div className={SignInCSS["sign-in-page"]}>
      <Link to="/" reloadDocument>
        <img className={SignInCSS["logo-two"]} src="/images/amajohn1.png" alt="logo"/>
      </Link>
      <SignInBox
        signInputValue={signInputValue}
        setSignInputValue={setSignInputValue}
        accData={accData}
      />
      <UnderElems />
      <Beneath />
    </div>
  );
}

export default SignIn;