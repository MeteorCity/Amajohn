import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LangPref from "./pages/LangPref";
import SignIn from "./pages/SignIn";
import Orders from "./pages/Orders";
import DeliverLoc from "./pages/DeliverLoc";
import Cart from "./pages/Cart";
import { useState } from "react";
import Password from "./pages/Password";
import CreateAcc from "./pages/CreateAcc";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [signInputValue, setSignInputValue] = useState(""); // sign-in input

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home cartCount={cartCount} setCartCount={setCartCount}/>
        }/>
        <Route path="/language-preference" element={<LangPref />}/>
        <Route path="/sign-in">
          <Route index element={<SignIn signInputValue={signInputValue} setSignInputValue={setSignInputValue}/>} />
          <Route path=":email" element={<Password />} />
          <Route path="create-account" element={<CreateAcc />} />
        </Route>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/location-choice" element={<DeliverLoc />}/>
        <Route path="/cart" element={
          <Cart cartCount={cartCount} setCartCount={setCartCount}/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
