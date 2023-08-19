import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Items from "../elements/Items";
import Header from "../elements/Header";

const Home = ({ cartCount, setCartCount }) => {
  const location = useLocation();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (location.state) {
      setIsSignedIn(true);
      setUsername(location.state.name.split(" ")[0]);
    }
  }, [])

  return (
    <div>
      <Header
        username={username}
        setUsername={setUsername}
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
      />
      <Items cartCount={cartCount} setCartCount={setCartCount}/>
    </div>
  );
}
 
export default Home;