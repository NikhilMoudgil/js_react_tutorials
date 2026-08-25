import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // hooks usage 
  let [counter, setCounter] = useState(0)

  //let counter =0
  const addvalue = () => {
    console.log(" Add Value Clicked");
    counter= counter+1;
    setCounter(counter)
    /*setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)*/
    //  the  above is a confusion  that if above commented setcouter methods will execute in batch and gives  solution directly simply 
    // Ones without  altering the expected  output and its because of the use state->   
    // we can execute the task of increament the output in real by another method-> 
    /*setCounter(prevcounter=>prevcounter + 1)
    setCounter(prevcounter=>prevcounter + 1)
    setCounter(prevcounter=>prevcounter + 1)*/
  }
  const removevalue = () => {
    console.log(" Delete Value Clicked");
    counter = counter - 1;
    setCounter(counter)
  }
  return (
    <>
      <h1> Nikhil Builds| Project 2 | CounterReact</h1>
      <h2>Counter  value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}> Delete Value</button>
    </>
  )
}

export default App
