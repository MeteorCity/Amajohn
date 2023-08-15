import CartButton from "./HeaderElems/CartButton";
import DeliverTo from "./HeaderElems/DeliverTo";
import LangChoice from "./HeaderElems/LangChoice";
import SearchForm from "./HeaderElems/SearchForm";
import { Link, useNavigate } from "react-router-dom";
import "../CSSFiles/Header.css";

const Header = ({ setIsPopup }) => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  return (
    <header onClick={setIsPopup ? () => setIsPopup(false) : undefined} >
      <Link to="/" reloadDocument>
        <img className="logo" src="/images/amajohn2.png" alt="logo"/>
      </Link>
      <DeliverTo />
      <SearchForm />
      <LangChoice />
      <button className="two-right-button" onClick={() => routeChange("/sign-in")}>
        Sign In
      </button>
      <button className="two-right-button" onClick={() => routeChange("/orders")}>
        Returns & Orders
      </button>
      <CartButton />
    </header>
  );
}
 
export default Header;