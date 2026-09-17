import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between gap-2">
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
                X
            </button>
        </li>
        
      ))}
    </div>
  )
}

export default Todos
