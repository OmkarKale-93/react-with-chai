import { useState , useCallback, useEffect,useRef} from 'react'

import './App.css'

function App() {

  const passwordRef = useRef(null)

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const generatePassword = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(characterAllowed) str+="!@#$%^&*(){}<>?"

    for (let i = 1; i <= length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length))
  }

  setPassword(password)

  },[length, numberAllowed, characterAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    generatePassword()
  }, [length, numberAllowed, characterAllowed,setPassword])
  

  return (
    <>
      <div className='bg-black w-full h-screen flex justify-center'>
      <div className="text-center items-center max-w-min bg-gray-500 h-max text-white px-10 m-10 rounded mt-12">  
      <h1 className='text-3xl mt-6'>Password Generator</h1>
      <div className='flex justify-center px-7 py-5'>
        <input type="text" ref={passwordRef} className='rounded w-96 text-black' placeholder='Password' value={password} readOnly />
        <button onClick={copyPasswordToClipBoard} className='bg-blue-500 hover:bg-blue-700 text-white px-8 rounded-r-lg font-bold py-2'>copy</button>
      </div>
      <div className='flex justify-center py-5'>
        <input type="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} /> <span className='ml-5'>Length {length}</span> 
        <label htmlFor="numchange"> </label>
          <input type="checkbox"  className='ml-7' name='numchange' value={numberAllowed} onChange={()=>setNumberAllowed((prev) => (!prev))} />numbers
        <label htmlFor="charchange"> </label>
          <input type="checkbox"  className='ml-7' name='charchange' value={characterAllowed} onChange={()=> setCharacterAllowed((prev)=> (!prev))} />Special character

        

      </div>
      </div>
      </div>
    </>
  )
}

export default App
