import Items from "../elements/Items";
import Header from "../elements/Header";
import { useState } from "react";

const Home = ({ cartCount, setCartCount }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Header setSearchValue={setSearchValue} />
      <Items
        cartCount={cartCount}
        setCartCount={setCartCount}
        searchValue={searchValue}
      />
    </div>
  );
}
 
export default Home;