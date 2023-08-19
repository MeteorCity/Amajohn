import { Link } from "react-router-dom";
import CreateBox from "../elements/SignInElems/CreateBox";
import Beneath from "../elements/SignInElems/Beneath";
import SignInCSS from "../CSSFiles/SignIn.module.css";
import { useEffect, useState } from "react";

// There's a problem with using useLocation. It works perfectly when I enter
// the page from clicking the button in UnderElems however when I manually
// type in the link, the state object of the location object is null.

const CreateAcc = () => {
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
      <CreateBox accData={accData}/>
      <Beneath />
    </div>
  );
}
 
export default CreateAcc;