const Beneath = ({ type }) => {
  return (
    <div className={`beneath-container ${type}`}>
      <div className="huge-break-line"></div>
      <div className="beneath-links-container">
        <a target="_blank" className="beneath-links" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a>
        <a target="_blank" className="beneath-links" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>
        <a target="_blank" className="beneath-links" href="https://www.amazon.com/hz/contact-us/foresight/hubgateway">Help</a>
      </div>
      <p className="copyright-text">© 1996-2023, Amajohn.com, Inc. or its affiliates</p>
    </div>
  );
}
 
export default Beneath;