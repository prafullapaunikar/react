import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <input
          type="range"
          min="-10"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Steps: {step}</span>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Steps: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : ` ${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        {count !== 0 || step !== 1 ? (
          <button
            onClick={() => {
              setCount(0);
              setStep(1);
            }}
          >
            Reset
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
