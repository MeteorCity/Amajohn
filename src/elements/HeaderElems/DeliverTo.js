import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DeliverTo = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    const path = "/location-choice";
    navigate(path);
  }

  return (
    <button className="deliver-to" onClick={routeChange}>
      <FaMapMarkerAlt className="pin-icon"/>
      <p className="location-text">Deliver to
        <span className="country"> Brazil</span>
      </p>
    </button>
  );
}
 
export default DeliverTo;