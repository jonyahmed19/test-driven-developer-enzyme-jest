import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h2>Counter App</h2>
      <p className="counter">{counter}</p>
      <button
        className="increase"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <button
        className="decrease"
        onClick={() => {
          setCounter(counter && counter - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
