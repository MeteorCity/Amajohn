import { Link, useNavigate } from "react-router-dom";
import SignInCSS from "../../CSSFiles/SignIn.module.css";
import { useState } from "react";

const CreateBox = ({ accData }) => {
  const navigate = useNavigate();
  const API_URL = "http://localhost:3500/accounts";
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isRePasswordValid, setIsRePasswordValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isAcceptable = true;
    let emailValidityChanged = false;

    for (const account of accData) {
      if (emailInput === account["email"] || !emailInput.includes("@") || !emailInput.includes(".")) {
        isAcceptable = false;
        emailValidityChanged = true;
        setIsEmailValid(false);
      }
    }

    if (!emailValidityChanged && !isEmailValid) {
      setIsEmailValid(true);
    }
    if (name.length === 0 || name.length > 25) {
      isAcceptable = false;
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
    if (password.length < 6) {
      isAcceptable = false;
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
    if (rePassword !== password) {
      isAcceptable = false;
      setIsRePasswordValid(false);
    } else {
      setIsRePasswordValid(true);
    }

    if (isAcceptable) {
      const addAccount = async () => {
        const id = accData.length + 1;
        const email = emailInput;
        const newAccount = { id, email, password, name };

        const postOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newAccount)
        };

        try {
          const result = await fetch(API_URL, postOptions);
          if (!result.ok) throw Error
          localStorage.setItem("signedIn", `${name.split(" ")[0]}`);
          navigate("/", {replace: true});
        } catch {
          console.log("Error creating new account");
        }
      }

      addAccount();
    }
  }

  return (
    <div className={SignInCSS["create-box"]}>
      <h2 className={SignInCSS["create-text"]}>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="your-name">Your name</label>
        <input type="text" name="your-name" id="your-name" placeholder="First and last name" onChange={(e) => setName(e.target.value)}></input>
        {!isNameValid && <p className={SignInCSS["not-valid-text"]}>Enter your name</p>}

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" onChange={(e) => setEmailInput(e.target.value)}></input>
        {!isEmailValid && <p className={SignInCSS["not-valid-text"]}>Email already taken or invalid</p>}

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="At least 6 characters" onChange={(e) => setPassword(e.target.value)}></input>
        {!isPasswordValid && <p className={SignInCSS["not-valid-text"]}>Minimum 6 characters required</p>}

        <label htmlFor="re-enter">Re-enter password</label>
        <input type="password" name="re-enter" id="re-enter" onChange={(e) => setRePassword(e.target.value)}></input>
        {!isRePasswordValid && <p className={SignInCSS["not-valid-text"]}>Type your password again</p>}

        <button className={SignInCSS["create-acc-button"]}>Create Account</button>
      </form>
      <p className={SignInCSS["continue-text"]}>{"By creating an account, you agree to Amajohn's "}
        <a target="_blank" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> {"and "} 
        <a target="_blank" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>
      </p>
      <p className={SignInCSS["already-text"]}>Already have an account?
        <Link className={SignInCSS["sign-in-link"]} to="/sign-in">Sign in</Link>
      </p>
    </div>
  );
}
 
export default CreateBox;