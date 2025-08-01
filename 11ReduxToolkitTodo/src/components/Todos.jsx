import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (id) => {
    if (!editText) return; 
    
    dispatch(updateTodo({ id, text: editText }));
    setIsEditing(null); 
    setEditText("");
  };

  return (
    <>
      <div className=" min-h-screen p-6 ">
        <ul className="list-none space-y-4">
          {todos.map((todo) => (
            <li
              className="flex justify-between items-center bg-gray-800 shadow-md p-4 rounded-lg transition-transform transform hover:scale-105 max-w-xl mx-auto "
              key={todo.id}
            >
              <div className="flex-1 text-white text-lg">
                {isEditing === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="bg-gray-700 rounded text-white px-3 py-2 w-full outline-none focus:ring focus:ring-blue-500 "
                  />
                ) : (
                  todo.text
                )}
              </div>
              <div className="flex space-x-3">
                {isEditing === todo.id ? (
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsEditing(todo.id);
                      setEditText(todo.text);
                    }}
                    className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 3.487a2.25 2.25 0 113.182 3.182l-9.182 9.182a4.5 4.5 0 01-1.691 1.06l-4.2 1.4a.75.75 0 01-.949-.949l1.4-4.2a4.5 4.5 0 011.06-1.691l9.182-9.182zm1.528 1.528L17.1 4.844m-4.488 4.488L14.11 9.333"
                      />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
