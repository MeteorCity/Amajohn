const CurrPopup = ({ setCurrencyChoice }) => {
  return (
    <div className="currency-popup">
      <p className="select-curr-text">Select Currency</p>
      <p
        className="currencies us-currency"
        onClick={() => setCurrencyChoice("$ - USD - US Dollar (Default)")}
      >$ - USD - US Dollar (Default)</p>
      <p
        className="currencies chile-curr"
        onClick={() => setCurrencyChoice("CLP - Chilean Peso")}
      >CLP - Chilean Peso</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("ARS - Argentine Peso")}
      >ARS - Argentine Peso</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("UYU - Uruguayan Peso")}
      >UYU - Uruguayan Peso</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("R$ - BRL - Brazilian Real")}
      >R$ - BRL - Brazilian Real</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("€ - EUR - Euro")}
      >€ - EUR - Euro</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("£ - GBP - British Pound")}
      >£ - GBP - British Pound</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("¥ - JPY - Japanese Yen")}
      >¥ - JPY - Japanese Yen</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("CN¥ - CNY - Chinese Yuan")}
      >CN¥ - CNY - Chinese Yuan</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("₩ - KRW - South Korean Won")}
      >₩ - KRW - South Korean Won</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("THB - Thai Baht")}
      >THB - Thai Baht</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("NOK - Norwegian Krone")}
      >NOK - Norwegian Krone</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("MAD - Moroccan Dirham")}
      >MAD - Moroccan Dirham</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("MNT - Mongolian Tugrik")}
      >MNT - Mongolian Tugrik</p>
      <p
        className="currencies"
        onClick={() => setCurrencyChoice("PLN - Polish Zloty")}
      >PLN - Polish Zloty</p>
    </div>
  );
}
 
export default CurrPopup;