import SignInCSS from "../../CSSFiles/SignIn.module.css";

const Beneath = () => {
  return (
    <div className={SignInCSS["beneath-container"]}>
      <div className={SignInCSS["huge-break-line"]}></div>
      <div className={SignInCSS["beneath-links-container"]}>
        <a target="_blank" className={SignInCSS["beneath-links"]} href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a>
        <a target="_blank" className={SignInCSS["beneath-links"]} href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>
        <a target="_blank" className={SignInCSS["beneath-links"]} href="https://www.amazon.com/hz/contact-us/foresight/hubgateway">Help</a>
      </div>
      <p className={SignInCSS["copyright-text"]}>© 1996-2023, Amajohn.com, Inc. or its affiliates</p>
    </div>
  );
}
 
export default Beneath;