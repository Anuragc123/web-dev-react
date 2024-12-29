import "./App.css";
import Block from "./components/Block";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let index = 0; index < win.length; index++) {
      const [a, b, c] = win[index];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }
    return null;
  };

  const handleBlockClick = (index: number) => {
    if (state[index] !== null || winner) return;

    const stateCopy = [...state];
    stateCopy[index] = currentTurn;
    setState(stateCopy);

    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  };

  useEffect(() => {
    const result = checkWinner(state);
    if (result) {
      setWinner(result);

      setTimeout(() => {
        alert(`${result} won the game`);
        setState(Array(9).fill(null));
        setCurrentTurn("X");
        setWinner(null);
      }, 100); 
    }
  }, [state]);

  return (
    <>
      <div className="p-5 ">
        <div className="row flex justify-center">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>
        <div className="row flex justify-center">
          <Block onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>
        <div className="row flex justify-center">
          <Block onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>
      </div>
    </>
  );
}

export default App;
