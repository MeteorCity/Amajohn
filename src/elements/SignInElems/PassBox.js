import { Link } from "react-router-dom";

const PassBox = ({ email }) => {
  return (
    <div className="pass-box">
      <h1 className="sign-in-text">Sign In</h1>
      <form autoComplete="off">
        <div className="pass-email-container">
          <p className="pass-email-text">{email}</p>
          <Link className="change-link" to="/sign-in">Change</Link>
        </div>
        <label htmlFor="pass-input" className="email-text">Password</label>
        <a target="_blank" className="forgot-pass-2" href="https://www.amazon.com/ap/forgotpassword?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=usflex&mobileBrowserWeblabTreatment=C&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fcustomer-preferences%2Fedit%3Fie%3DUTF8%26preferencesReturnUrl%3D%252Fs%253Fk%253Dcolored%252Bpencils%2526language%253Den_US%2526crid%253D1FA1I7ZX7JGVD%2526currency%253DUSD%2526sprefix%253D%25252Caps%25252C648%2526ref%253Dnb_sb_ss_sx-trend-t-ps-d_6_0%26ref_%3Dnav_ya_signin&prevRID=BVC6701E118GM2NCWT90&openid.assoc_handle=usflex&openid.mode=checkid_setup&desktopBrowserWeblabTreatment=C&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">Forgot your password?</a>
        <input
          type="password"
          className="password-input"
          name="pass-input"
        />
        <button className="continue-button">Sign In</button>

        <div className="pass-checkbox-container">
          <input id="keep-logged-in" className="pass-checkbox" name="keep-logged-in" type="checkbox" />
          <label className="keep-text" htmlFor="keep-logged-in">Keep me signed in.</label>
        </div>
      </form>
    </div>
  );
}
 
export default PassBox;