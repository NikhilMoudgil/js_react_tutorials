import { useState } from 'react'
import Solo from './nikhil_build'

function App() {
  const [count, setCount] = useState(0)
  const username ="Solo.Sync"
  return(
    <>
   <Solo/>
   <h1>Welcome to the react hub {username }</h1>
   </>
  )
}

export default App
