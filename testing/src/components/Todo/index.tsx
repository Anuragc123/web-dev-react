import React from "react";
import TodoItem from "./TodoItem";

interface NewTodoItem {
  id: number;
  title: string;
}
interface TodoProps {
  items: NewTodoItem[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="m-4 w-fit border-dashed border-2 border-red-500 p-4">
      <ol className="list-decimal">
        {props.items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
