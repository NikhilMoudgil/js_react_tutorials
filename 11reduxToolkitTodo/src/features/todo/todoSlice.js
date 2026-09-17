import { createSlice ,nanoid} from "@reduxjs/toolkit";
const intialState={
    todos:[{id:1,text:"Hello world"}]
}
export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)={},// state give the current state of the slice and 




                                           //action is the payload that we pass to the reducer
        
    }
})