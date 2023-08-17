// THIS PAGE IS JUST AN EXTENSION OF THE SIGNIN PAGE BUT I DON'T WANT TO FUCK
// THINGS UP BY CHANGING THE FILE THAT IT'S IN

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Beneath from "../elements/SignInElems/Beneath";
import PassBox from "../elements/SignInElems/PassBox";
import SignInCSS from "../CSSFiles/SignIn.module.css";

const Password = () => {
  const { email } = useParams();
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
      <PassBox accData={accData} email={email}/>
      <Beneath />
    </div>
  );
}
 
export default Password;