import { createSlice ,nanoid} from "@reduxjs/toolkit";
const intialState={
    todos:[{id:1,text:"Hello world"}]
}
export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const Todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(Todo)
        },// state give the current state of the slice and 
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)    
        },  //action is the payload that we pass to the reducer
        
    }
})
export const {addTodo,removeTodo}=todoSlice.actions// used to export the actions that we defined in the slice