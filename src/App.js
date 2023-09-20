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
import NotFound from "./pages/NotFound";

function App() {
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "EN");
  } if (!localStorage.getItem("currency")) {
    localStorage.setItem("currency", "$ - USD - US Dollar (Default)");
  } if (!localStorage.getItem("cartItems")) {
    localStorage.setItem("cartItems", JSON.stringify([]));
  }

  const findCurrencyAbbrev = (currency) => {
    const letterPattern = /[A-Z]{3}/;
    return currency.match(letterPattern)[0];
  }

  const findCurrencySymbol = (currency) => {
    const symbolPattern = /[$€£¥₩]/;
    const symbol = currency.match(symbolPattern);
    return (symbol ? symbol[0] : "");
  }

  const exchangeRate = {USD: 1, CLP: 0.0012, ARS: 0.0029, UYU: 0.027, BRL: 0.20,
    EUR: 1.08, GBP: 1.27, JPY: 0.0069, CNY: 0.14, KRW: 0.00076, THB: 0.029,
    NOK: 0.094, MAD: 0.098, MNT: 0.00029, PLN: 0.24
  };

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));
  const [signInputValue, setSignInputValue] = useState(""); // sign-in input

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home cartItems={cartItems} setCartItems={setCartItems}/>
        }/>
        <Route path="/language-preference" element={<LangPref />}/>
        <Route path="/sign-in">
          <Route index element={<SignIn signInputValue={signInputValue} setSignInputValue={setSignInputValue}/>} />
          <Route path="password" element={<Password />} />
          <Route path="create-account" element={<CreateAcc />} />
        </Route>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/location-choice" element={<DeliverLoc />}/>
        <Route path="/cart" element={<Cart
          cartItems={cartItems}
          findCurrencySymbol={findCurrencySymbol}
          findCurrencyAbbrev={findCurrencyAbbrev}
          exchangeRate={exchangeRate}
        />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
