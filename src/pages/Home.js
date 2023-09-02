import Items from "../elements/Items";
import Header from "../elements/Header";

const Home = ({ cartCount, setCartCount }) => {
  return (
    <div>
      <Header />
      <Items cartCount={cartCount} setCartCount={setCartCount}/>
    </div>
  );
}
 
export default Home;