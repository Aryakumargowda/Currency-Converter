import { useState } from "react";
import "./App.css";
import useCurinfo from "./hook/useCurInfo";
import Input from "./components/jsx/Input";

function App() {
  const [amt, setAmt] = useState(0);
  const [convertedAmt, setConvertedAmt] = useState(0);
  const [From, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const curInfo = useCurinfo(From);

  const opt = Object.keys(curInfo);

  const swap = () => {
    setFrom(to);
    setTo(From);
    setConvertedAmt(amt);
    setAmt(convertedAmt);
  };

  const convert = () => {
    setConvertedAmt(amt * curInfo[to]);
  };

  return (
    <div className="body">
      <h1>Currency converter</h1>
      <Input
        label={"From"}
        amount={amt}
        currencyOpt={opt}
        onAmountChange={(cur)=>{
          setAmt(cur)
        }}
        onCurrencyChange={(currency) => {
          setFrom(currency);
        }}
        selectCurrency={From}
      />
      <div className="swap">
        <button onClick={swap}>Swap</button>
      </div>
      <Input
        label={"to"}
        amount={convertedAmt}
        currencyOpt={opt}
        onAmountChange={(cur)=>{
          setAmt(cur)
        }}
        onCurrencyChange={(currency) => {
          setTo(currency);
        }}
        selectCurrency={to}
      />
      <div className="convert">
        <button onClick={convert}>Convert {From} to {to}</button>
      </div>
    </div>
  );
}

export default App;
