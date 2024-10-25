// "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/dist/currency.min.js"

import { useEffect, useState } from "react";


function useCurrencyConvert (currency){
    const [data, setData] = useState('')
useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((response)=>response.json())
    .then((res)=> setData(res))
},[currency])
return data;
}

export default useCurrencyConvert;