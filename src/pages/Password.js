// THIS PAGE IS JUST AN EXTENSION OF THE SIGNIN PAGE BUT I DON'T WANT TO FUCK
// THINGS UP BY CHANGING THE FILE THAT IT'S IN

import { Link, useParams } from "react-router-dom";
import Beneath from "../elements/SignInElems/Beneath";
import PassBox from "../elements/SignInElems/PassBox";

const Password = () => {
  const { email } = useParams();

  return (
    <div className="sign-in-page">
      <Link to="/" reloadDocument>
        <img className="logo-two" src="/images/amajohn1.png" alt="logo"/>
      </Link>
      <PassBox email={email}/>
      <Beneath type="password"/>
    </div>
  );
}
 
export default Password;