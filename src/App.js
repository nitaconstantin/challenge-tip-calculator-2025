import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = (bill * ((percentage1 + percentage2) / 2)) / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="App">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        <label htmlFor="">How did you like the service?</label>
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        <label htmlFor="">How did your friend like the service?</label>
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;

function BillInput({ bill, onSetBill }) {
  return (
    <div className="bill-container">
      <label htmlFor="">How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSetPercentage }) {
  return (
    <div className="select-percentage-container">
      <label htmlFor="">{children}</label>
      <select
        name=""
        id=""
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was bad (5%)</option>
        <option value="10">It was good! (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="output-container">
      You pay {bill + tip}$ Bill: {bill}$ Tip: {tip}$
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
