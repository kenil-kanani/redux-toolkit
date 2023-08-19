import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
