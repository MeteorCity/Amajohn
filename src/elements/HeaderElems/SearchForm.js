import { FaSearch, FaCaretDown } from "react-icons/fa";
import HeaderCSS from "../../CSSFiles/Header.module.css";

const SearchForm = () => {
  return (
    <form className={HeaderCSS["search-container"]}>
      <button className={HeaderCSS["all-button"]}>
        <p className={HeaderCSS["all-text"]}>All</p>
        <FaCaretDown className={HeaderCSS["down-arrow"]}/>
      </button>
      <input className={HeaderCSS["search-bar"]} type="text" placeholder="Search Amajohn"/>
      <button className={HeaderCSS["search-icon-container"]}>
        <FaSearch className={HeaderCSS["search-icon"]}/>
      </button>
    </form>
  );
}
 
export default SearchForm;