import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyConvert from './hooks/useCurrencyConvert.js'
import InputBox from './components/InputBox.jsx'

function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyConvert(from)

  const options = Object.keys(CurrencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () =>{
  setConvertedAmount(amount* CurrencyInfo[to])
  }

  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center item-center">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form action="" onSubmit={(e)=>{
          e.preventDefault();
        }}>
          <div className="w-full mb-1">
            <InputBox label={from} amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setAmount(amount)} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)}/>
            <div className="relative w-full h-0.5">
              <button type='button' onClick={swap}>swap</button>
            </div>
            <InputBox label={to} amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency)=> setTo(currency)} selectCurrency={from} amountDisable/>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
             
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
