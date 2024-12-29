import React from "react";

interface TodoItemProps {
    title: string;
}

const TodoItem: React.FC<TodoItemProps> = ({title}) => {
  return (
    

      <li className="bg-blue-200 m-2 rounded-lg p-1">{title}</li>
  );
};

export default TodoItem;
