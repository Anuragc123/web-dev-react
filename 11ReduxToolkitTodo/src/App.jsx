import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-white text-2xl font-bold">Todo List</h1>
        <p className="text-gray-400 text-sm">Manage your tasks efficiently</p>
      </div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App
