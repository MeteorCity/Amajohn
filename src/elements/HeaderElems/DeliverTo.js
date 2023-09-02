import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeaderCSS from "../../CSSFiles/Header.module.css";

const DeliverTo = () => {
  let navigate = useNavigate();

  return (
    <button className={HeaderCSS["deliver-to"]} onClick={() => navigate("/location-choice")}>
      <FaMapMarkerAlt className={HeaderCSS["pin-icon"]}/>
      <p className={HeaderCSS["location-text"]}>Deliver to
        <span className={HeaderCSS["country"]}> Brazil</span>
      </p>
    </button>
  );
}
 
export default DeliverTo;