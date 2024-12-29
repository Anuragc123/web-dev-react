import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import Counter from "./components/Counter";

const myTodoItems = [
  {
    id: 1,
    title: "I need to finish my homeork.",
  },
  {
    id: 2,
    title: "I need to eat.",
  },
  {
    id: 3,
    title: "I need to sleep early.",
  },
];

const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);

  return (
    <div>
      <Todo items={myTodoItems} />
      <button onClick={(e) => setState(!state)} className="bg-gray-500 m-2 p-2 ml-4">Toggle</button>
      {state ? <Counter /> : ""}
    </div>
  );
};

export default App;
