import { Link } from "react-router-dom";
import SignInCSS from "../../CSSFiles/SignIn.module.css";

const CreateBox = () => {
  return (
    <div className={SignInCSS["create-box"]}>
      <h2 className={SignInCSS["create-text"]}>Create Account</h2>
      <form>
        <label htmlFor="your-name">Your name</label>
        <input type="text" name="your-name" id="your-name" placeholder="First and last name"></input>

        <label htmlFor="num-or-email">Mobile number or email</label>
        <input type="text" name="num-or-email" id="num-or-email"></input>

        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" placeholder="At least 6 characters"></input>

        <label htmlFor="re-enter">Re-enter password</label>
        <input type="text" name="re-enter" id="re-enter"></input>

        <button className={SignInCSS["create-acc-button"]}>Create Account</button>
      </form>
      <p className={SignInCSS["continue-text"]}>{"By creating an account, you agree to Amazon's "}
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