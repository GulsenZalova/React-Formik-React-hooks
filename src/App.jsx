import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignupForm from "./Basic"
import HookForm from './HookForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <SignupForm/>
     <HookForm/>
    </div>
  )
}

export default App
