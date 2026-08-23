import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // hooks usage 
  let [counter, setCounter ]=useState(0)
 
  //let counter =0
  const addvalue= ()=>{
    console.log(" Add Value Clicked");
    counter= counter+1;
    setCounter(counter)
  }
  const removevalue=()=>{
      console.log(" Delete Value Clicked");
    counter= counter-1;
    setCounter(counter)
  }
  return (
    <>
      <h1> Nikhil Builds| Project 2 | CounterReact</h1>
      <h2>Counter  value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br/>
      <button onClick={removevalue}> Delete Value</button>
    </>
  )
}

export default App
