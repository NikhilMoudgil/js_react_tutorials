import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex 
      flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3
        shadow-lg drop-shadow-2xl bg-white px-2.5 py-2 rounded-3xl">
          <button 
           //onClick={setColor("red")} this is a onClick 
           // method problem as it require function  and instead we use a callback as->
            onClick={()=> setColor("red")}
           className="outline-none px-4 py-1 rounded-full
           text-white shadow-2xl"style={{backgroundColor:"red"}}>Red</button>
           <button
           onClick={()=> setColor("green")} 
           className="outline-none px-4 py-1 rounded-full
           text-white shadow-2xl"style={{backgroundColor:"green"}}>Green</button>
           <button
           onClick={()=> setColor("blue")}
           className="outline-none px-4 py-1 rounded-full
           text-white shadow-2xl"style={{backgroundColor:"blue"}}>Blue</button>
           <button 
           onClick={()=> setColor("yellow")}
           className="outline-none px-4 py-1 rounded-full
           text-white shadow-2xl"style={{backgroundColor:"yellow"}}>Yellow</button>
           <button
           onClick={()=> setColor("purple")}
           className="outline-none px-4 py-1 rounded-full
           text-white shadow-2xl"style={{backgroundColor:"purple"}}>Purple</button>
           <button
           onClick={()=> setColor("cyan")}
           className="outline-none px-4 py-1 rounded-full
           text-white shadow-2xl"style={{backgroundColor:"cyan"}}>Cyan</button>
         <button
         onClick={()=> setColor("gray")}
         className="outline-none px-4 py-1 rounded-full
           text-white shadow-2xl"style={{backgroundColor:"gray"}}>Gray</button>
        
        </div>
      </div>
      
    </div>
  )
}

export default App
