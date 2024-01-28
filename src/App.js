import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // function handleStepN() {
  //   setStep((s) => s - 1);
  // }
  // function handleStepP() {
  //   setStep((s) => s + 1);
  // }
  // function handleCountN() {
  //   setCount((c) => c - step);
  // }
  // function handleCountP() {
  //   setCount((c) => c + step);
  // }
  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <strong>Step:{step}</strong>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <strong>count:{count}</strong>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} Days from today is `
          : `${Math.abs(count)} Days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </>
  );
}
