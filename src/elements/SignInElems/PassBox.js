import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignInCSS from "../../CSSFiles/SignIn.module.css";

const PassBox = ({ account }) => {
  const navigate = useNavigate();
  const email = account.email;
  const password = account.password;
  const [isValidPass, setIsValidPass] = useState(true);
  const [passInput, setPassInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passInput === password) {
      navigate("/", {state: account});
    } else {
      setIsValidPass(false);
    }
  }

  const handleChange = (e) => {
    setPassInput(e.target.value);
  }

  return (
    <div className={SignInCSS["pass-box"]}>
      <h1 className={SignInCSS["sign-in-text"]}>Sign In</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className={SignInCSS["pass-email-container"]}>
          <p className={SignInCSS["pass-email-text"]}>{email}</p>
          <Link className={SignInCSS["change-link"]} to="/sign-in">Change</Link>
        </div>
        <label htmlFor="pass-input" className={SignInCSS["email-text"]}>Password</label>
        <a target="_blank" className={SignInCSS["forgot-pass-2"]} href="https://www.amazon.com/ap/forgotpassword?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=usflex&mobileBrowserWeblabTreatment=C&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fcustomer-preferences%2Fedit%3Fie%3DUTF8%26preferencesReturnUrl%3D%252Fs%253Fk%253Dcolored%252Bpencils%2526language%253Den_US%2526crid%253D1FA1I7ZX7JGVD%2526currency%253DUSD%2526sprefix%253D%25252Caps%25252C648%2526ref%253Dnb_sb_ss_sx-trend-t-ps-d_6_0%26ref_%3Dnav_ya_signin&prevRID=BVC6701E118GM2NCWT90&openid.assoc_handle=usflex&openid.mode=checkid_setup&desktopBrowserWeblabTreatment=C&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">Forgot your password?</a>
        {!isValidPass && <p className={SignInCSS["valid-text"]}>Wrong password.</p>}
        <input
          type="password"
          className={SignInCSS["password-input"]}
          name="pass-input"
          id="pass-input"
          onChange={handleChange}
        />
        <button className={SignInCSS["continue-button"]}>Sign In</button>

        <div className={SignInCSS["pass-checkbox-container"]}>
          <input
            type="checkbox"
            id="keep-logged-in"
            className={SignInCSS["pass-checkbox"]}
            name="keep-logged-in"
          />
          <label className={SignInCSS["keep-text"]} htmlFor="keep-logged-in">Keep me signed in.</label>
        </div>
      </form>
    </div>
  );
}
 
export default PassBox;