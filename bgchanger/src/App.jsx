import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
     <div className="w-full h-screen" style={{backgroundColor: color}}>
     <div className="fixed flex justify-center bottom-12 inset-x-0 px-2 rounded-lg">   
  <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded">  
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>red</button>  
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>green</button>  
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>blue</button>  
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-800" style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>orange</button>  
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-500" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>pink</button>  
  </div>  
</div>
     </div>
    </>
  )
}

export default App
