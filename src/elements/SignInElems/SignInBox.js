import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignInBox = ({ inputValue, setInputValue }) => {
  const [isValid, setIsValid] = useState(true);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.includes("@") && inputValue.includes(".") && inputValue.length < 34) {
      navigate(`${inputValue}`);
    } else {
      setIsValid(false);
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="sign-in-box">
      <h1 className="sign-in-text">Sign In</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="email-phone-input" className="email-text">Email or mobile phone number</label>
        {!isValid && <p className="valid-text">Please enter a valid email.</p>}
        <input
          onChange={handleChange}
          type="text"
          className="email-input"
          name="email-phone-input"
          value={inputValue}
        />
        <button className="continue-button">Continue</button>
      </form>
      <p className="continue-text">{"By continuing, you agree to Amazon's "}
        <a target="_blank" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> {"and "} 
        <a target="_blank" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>
      </p>
      <a target="_blank" className="forgot-pass" href="https://www.amazon.com/ap/forgotpassword?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=usflex&mobileBrowserWeblabTreatment=C&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fcustomer-preferences%2Fedit%3Fie%3DUTF8%26preferencesReturnUrl%3D%252Fs%253Fk%253Dcolored%252Bpencils%2526language%253Den_US%2526crid%253D1FA1I7ZX7JGVD%2526currency%253DUSD%2526sprefix%253D%25252Caps%25252C648%2526ref%253Dnb_sb_ss_sx-trend-t-ps-d_6_0%26ref_%3Dnav_ya_signin&prevRID=BVC6701E118GM2NCWT90&openid.assoc_handle=usflex&openid.mode=checkid_setup&desktopBrowserWeblabTreatment=C&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">Forgot your password?</a>
    </div>
  );
}
 
export default SignInBox;