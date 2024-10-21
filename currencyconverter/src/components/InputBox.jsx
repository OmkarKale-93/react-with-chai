import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
      <label htmlFor="" className='text-black/40 mb-40 inline-block'>
      {label} 
      </label>
      <input type="number" placeholder='Amount' className='outline-none w-full bg-transparent py-1.5' disabled={amountDisable} value={amount} onChange={onAmountChange && onAmountChange((e)=>e.target.value)} />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
      <p className="text-black/40 mb-2 w-full">
      currency type
      </p>
      <select name="" id="" className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectCurrency} onChange={onCurrencyChange && onCurrencyChange((e)=>e.target.value)} disabled = {currencyDisable}>
       {currencyOptions.map((currency)=>(
           <option value={currency} key={currency}>{currency} </option>
        ))} 
      </select>
      </div>
    
    </div>
  )
}

export default InputBox