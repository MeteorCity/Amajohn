import { useNavigate } from "react-router-dom";

const TwoButtons = () => {
  let navigate = useNavigate();
  const goHomeRoute = () => {
    navigate("/");
  }

  return (
    <div className="two-buttons">
      <button className="cancel-button" onClick={goHomeRoute}>Cancel</button>
      <button className="apply-changes-button" onClick={goHomeRoute}>Apply Changes</button>
    </div>
  );
}
 
export default TwoButtons;