import { configureStore } from '@reduxjs/toolkit'
import { addTodo, removeTodo } from '../features/todo/todoSlice'
export default configureStore({
  reducer: todoReducer
})