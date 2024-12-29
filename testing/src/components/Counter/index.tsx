import React from "react";
import { useState, useEffect } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Counter mounted");

    return function () {
      console.log("Unmount Counter");
    };
  }, []);

  useEffect(() => {
    console.log("User updated counter");
  }, [counter]);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };
  const handleDecrement = () => {
    if (counter === 0) return;
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="flex ml-4">
      <h1 className="m-2">{counter}</h1>
      <button
        onClick={handleIncrement}
        className="bg-green-300 ml-4 border-2 p-2 cursor-pointer"
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        className="bg-red-600 ml-4 border-2 p-2 cursor-pointer"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
