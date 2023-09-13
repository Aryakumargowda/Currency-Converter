import React, { useId } from "react";
import "../style/Input.css";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOpt = [],
  selectCurrency = "usd",
}) {
  const amtInput=useId()
  return (
    <div >
      <div className="input_frame">
        <div className="input_top">
          <label htmlFor={amtInput}>{label}</label>
          <span>Currency Type</span>
        </div>
        <div className="input_bot">
          <input
            type="number"
            name="cur"
            id={amtInput}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={false}
          />
          <select name="choose" id="choose" value={selectCurrency}
              onChange={(e) =>
                onCurrencyChange && onCurrencyChange(e.target.value)
              }>
              {currencyOpt.map((c)=>(
                <option key={c} value={c}>{c}</option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Input;
