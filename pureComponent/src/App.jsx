import { useState } from 'react'
import './App.css'
import Concept from './concept/concept'
import SimpleCounterComponent from "./Components/SimpleCounterComponent"
import PureCounterComponent from './Components/PureCounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     APP
     {/* <Concept/> */}
     <SimpleCounterComponent/>
     <PureCounterComponent/>
    </>
  )
}

export default App
