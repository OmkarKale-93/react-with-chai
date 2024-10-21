import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () =>{
    setCount(count + 1);
  }

  const removeValue = () =>{
    setCount(count - 1);
  }
  return (
    <>
      <h1>This is a counter application</h1>
      <p>Count: {count}</p>
      <button onClick={addValue}>Increament</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
