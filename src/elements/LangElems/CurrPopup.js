import LangCSS from "../../CSSFiles/Lang.module.css";

const CurrPopup = ({ setCurrencyChoice }) => {
  return (
    <div className={LangCSS["currency-popup"]}>
      <p className={LangCSS["select-curr-text"]}>Select Currency</p>
      <p
        className={`${LangCSS["currencies"]} ${LangCSS["us-currency"]}`}
        onClick={() => setCurrencyChoice("$ - USD - US Dollar (Default)")}
      >$ - USD - US Dollar (Default)</p>
      <p
        className={`${LangCSS["currencies"]} ${LangCSS["chile-curr"]}`}
        onClick={() => setCurrencyChoice("CLP - Chilean Peso")}
      >CLP - Chilean Peso</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("ARS - Argentine Peso")}
      >ARS - Argentine Peso</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("UYU - Uruguayan Peso")}
      >UYU - Uruguayan Peso</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("R$ - BRL - Brazilian Real")}
      >R$ - BRL - Brazilian Real</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("€ - EUR - Euro")}
      >€ - EUR - Euro</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("£ - GBP - British Pound")}
      >£ - GBP - British Pound</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("¥ - JPY - Japanese Yen")}
      >¥ - JPY - Japanese Yen</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("CN¥ - CNY - Chinese Yuan")}
      >CN¥ - CNY - Chinese Yuan</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("₩ - KRW - South Korean Won")}
      >₩ - KRW - South Korean Won</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("THB - Thai Baht")}
      >THB - Thai Baht</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("NOK - Norwegian Krone")}
      >NOK - Norwegian Krone</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("MAD - Moroccan Dirham")}
      >MAD - Moroccan Dirham</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("MNT - Mongolian Tugrik")}
      >MNT - Mongolian Tugrik</p>
      <p
        className={LangCSS["currencies"]}
        onClick={() => setCurrencyChoice("PLN - Polish Zloty")}
      >PLN - Polish Zloty</p>
    </div>
  );
}
 
export default CurrPopup;