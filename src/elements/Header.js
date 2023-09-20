import CartButton from "./HeaderElems/CartButton";
import DeliverTo from "./HeaderElems/DeliverTo";
import LangChoice from "./HeaderElems/LangChoice";
import SearchForm from "./HeaderElems/SearchForm";
import { Link, useNavigate } from "react-router-dom";
import HeaderCSS from "../CSSFiles/Header.module.css";

const Header = ({ setIsPopup, setSearchValue }) => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  const handleSignInClick = () => {
    if (!localStorage.getItem("signedIn")) {
      routeChange("/sign-in");
    } else {
      localStorage.removeItem("signedIn");
      localStorage.removeItem("cartItems");
      routeChange("/");
      window.location.reload();
    }
  }

  return (
    <header onClick={setIsPopup ? () => setIsPopup(false) : undefined} >
      <Link to="/" reloadDocument>
        <img className={HeaderCSS["logo"]} src="/images/amajohn2.png" alt="logo"/>
      </Link>
      <DeliverTo />
      <SearchForm setSearchValue={setSearchValue} />
      <LangChoice />
      <button className={`${HeaderCSS["two-right-button"]} ${HeaderCSS["sign-in-btn"]}`}
        onClick={handleSignInClick}>
        {localStorage.getItem("signedIn") && <p className={HeaderCSS["hello-text"]}>{`Hello, ${localStorage.getItem("signedIn")}`}</p>}
        {localStorage.getItem("signedIn") ? "Sign Out" : "Sign In"}
      </button>
      <button className={HeaderCSS["two-right-button"]} onClick={() => routeChange("/orders")}>
        Returns & Orders
      </button>
      <CartButton />
    </header>
  );
}
 
export default Header;