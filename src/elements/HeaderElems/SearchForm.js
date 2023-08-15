import { FaSearch, FaCaretDown } from "react-icons/fa";

const SearchForm = () => {
  return (
    <form className="search-container">
      <button className="all-button">
        <p className="all-text">All</p>
        <FaCaretDown className="down-arrow"/>
      </button>
      <input className="search-bar" type="text" placeholder="Search Amajohn"/>
      <button className="search-icon-container">
        <FaSearch className="search-icon"/>
      </button>
    </form>
  );
}
 
export default SearchForm;