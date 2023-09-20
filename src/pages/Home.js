import Items from "../elements/Items";
import Header from "../elements/Header";
import { useState } from "react";

const Home = ({ cartItems, setCartItems }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Header setSearchValue={setSearchValue} />
      <Items
        searchValue={searchValue}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}
 
export default Home;