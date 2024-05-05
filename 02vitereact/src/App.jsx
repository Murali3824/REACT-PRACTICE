import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)

  // let counter=5

  //  function addValue(){
  const addValue=()=>{
    if(counter<10){
     setCounter(counter+1)
    //  setCounter(counter=>counter+1)
    //  setCounter(counter=>counter+1)
    //  setCounter(counter=>counter+1)
    }
    else{
     setCounter("invalid")
    }
  }

  const removeValue=()=>{
  if(counter>0){
    setCounter(counter-1)
  }
  else{
    // console.log("invalid");
    setCounter("invalid")
  }
  }

  return (
   <>
   <h1>React</h1>
   <h2>Counter Value:{counter}</h2>

   <button onClick={addValue}>Add value : {counter}</button><br />
   <button onClick={removeValue}>Remove value : {counter}</button>
   <p>Value : {counter}</p>
   </>
  )
}

export default App
