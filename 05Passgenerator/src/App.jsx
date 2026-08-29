import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed, setnumberAllowed]= useState(false);
  const[charAllodwed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("");

 // useCallback hook-> it is a hook that lets you cache a function definition between re-renders. 
 // const cachefn= usecallback(fn,dependecies)
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXOYZasbcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str+="0123456789";
    if(charAllodwed) str+="!@#$%^&*_+-=[]{}~`";
    for (let i = 1; i <=array.length; i++){
      let char =Math.floor(Math.random()*str.length+1)
     password =str.charAt(char);
    }
    setPassword(password);
  }, [length,numberAllowed,charAllodwed, setPassword])
  return (
    <>
      <h1 className='text-4xl text-center text-white'> Password Generator</h1>
    </>
  ) 
}

export default App
