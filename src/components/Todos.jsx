import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch()

  return (
    <>
      <h1 className=''>Todos</h1>
      {todos.map(todo => {
        return (
          <div className='' key={todo.id} >
            {todo.text}
          </div>
        )
      })}
    </>
  )
}

export default Todos
