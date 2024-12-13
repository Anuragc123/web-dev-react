import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter === 20) return;
    setCounter(counter + 1);
    // console.log("value added ", counter);
  };
  const removeValue = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
    // console.log("value added ", counter);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>Decrease value</button>
    </>
  );
}

export default App;
