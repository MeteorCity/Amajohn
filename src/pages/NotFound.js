import { Navigate } from "react-router-dom";

// returns the user to the home page when they enter an invalid url

const NotFound = () => {
  return <Navigate to="/" />;
}
 
export default NotFound;