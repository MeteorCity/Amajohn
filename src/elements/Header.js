import CartButton from "./HeaderElems/CartButton";
import DeliverTo from "./HeaderElems/DeliverTo";
import LangChoice from "./HeaderElems/LangChoice";
import SearchForm from "./HeaderElems/SearchForm";
import { Link, useNavigate } from "react-router-dom";
import HeaderCSS from "../CSSFiles/Header.module.css";

const Header = ({ setIsPopup, username, setUsername, isSignedIn, setIsSignedIn }) => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  const handleSignInClick = () => {
    if (!isSignedIn) {
      routeChange("/sign-in");
    } else {
      window.location.reload();
      setUsername("");
      setIsSignedIn(false);
      navigate("/", {state: null})
    }
  }

  return (
    <header onClick={setIsPopup ? () => setIsPopup(false) : undefined} >
      <Link to="/" reloadDocument>
        <img className={HeaderCSS["logo"]} src="/images/amajohn2.png" alt="logo"/>
      </Link>
      <DeliverTo />
      <SearchForm />
      <LangChoice />
      <button className={`${HeaderCSS["two-right-button"]} ${HeaderCSS["sign-in-btn"]}`}
        onClick={handleSignInClick}>
        {isSignedIn && <p className={HeaderCSS["hello-text"]}>{`Hello, ${username}`}</p>}
        {isSignedIn ? "Sign Out" : "Sign In"}
      </button>
      <button className={HeaderCSS["two-right-button"]} onClick={() => routeChange("/orders")}>
        Returns & Orders
      </button>
      <CartButton />
    </header>
  );
}
 
export default Header;