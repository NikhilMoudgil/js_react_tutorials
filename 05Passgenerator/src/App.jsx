import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllodwed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Fixed typo in alphabet
    
    if (numberAllowed) str += "0123456789";
    if (charAllodwed) str += "!@#$%^&*_+-=[]{}~`";
    
    for (let i = 1; i <= length; i++) {
      // FIX 2: Removed "+ 1". Array indices start at 0. Adding 1 skips 'A' and causes out-of-bounds undefined characters.
      let char = Math.floor(Math.random() * str.length); 
      
      // FIX 1: Use the local variable 'pass', not the constant state variable 'password'
      pass += str.charAt(char); 
    }
    
    // Set the state using the local 'pass' variable
    setPassword(pass);
  }, [length, numberAllowed, charAllodwed]) 

  useEffect(()=> {
    passwordGenerator()
  }, [length, numberAllowed, charAllodwed, passwordGenerator])

  return (
    <>
      <h1 className='text-4xl text-center text-white'> Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-amber-800 bg-amber-50'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> {/* Fixed classname typo here */}
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button className='outline-none bg-blue-400 text-amber-50 px-3 py-0.5 shrink-0 rounded-2xl'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(Number(e.target.value)) }} // Converted string to Number
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllodwed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label> {/* Fixed htmlFor matching ID */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App