import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"murali",
    age:21
  }

  let newArr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    {/* <Card channel="1" someObj={myObj}/>
    <Card channel="2" someObj={newArr} /> */}
    <Card username="Murali" btnText="Click me"/>
    <Card username="laddu" />
    </>
  )
}

export default App
