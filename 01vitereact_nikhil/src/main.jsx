import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Declaration of app.jsx in main.jsx
function Myapp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
/*const ReactElement = {
  type: "a",
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  Children: 'Click me to Visit google'
}*/
//const anotheruser ="MuscleMatrixTurbo"
const reactElement= React.createElement(
  'a',
  {href:'https://github.com/NikhilMoudgil',target:'_blank'},
  'Click me to visit  my github profile ',
  //anotheruser
)



const anotherElement= (
  <a href='https://github.com/NikhilMoudgil' target='_blank'>Visit Google</a>
)


createRoot(document.getElementById('root')).render(
   <App/>
)
