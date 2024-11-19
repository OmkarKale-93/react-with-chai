import React, { useState } from "react";
import useWeatherData from "./hooks/useWeatherData";

function App() {
    const [city, setCity] = useState("London");
    const { weatherData, loading, error } = useWeatherData(city);
console.log(weatherData)
    return (
        <div className="w-full h-screen bg-brown flex justify-center items-center bg-[url('https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3De')]">
          <div className="w-2/3 h-3/5 ">
          <div className="flex justify-center">
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city name" 
                className="h-1/5 w-1/2 border rounded-xl text-center text-white bg-transparent border-black font-bold text-4xl from-neutral-800 focus:outline-none"
            />
            </div>
            {loading && <p>Loading...</p>}
            
            {error && <p>Error: {error}</p>}

            {weatherData && !loading && !error && (
                <div>
                    <div className="flex items-center justify-center space-x-9">
    <h2 className="text-6xl mt-20 font-bold ">{weatherData.name}</h2>
    <div className="flex flex-col items-center">
    {weatherData.weather?.[0]?.icon && (
        <img
            className="w-32 h-32"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description || "Weather condition"}
        />
    )}
    <p className="mt-4 text-lg font-semibold">
        {weatherData.weather ? weatherData.weather[0].description : "No description available"}
    </p>
</div>

</div>
<div className="flex items-center justify-center ">
                    <div className="flex font-bold text-xl flex-col items-center justify-center space-x-10 mt-20">
                    <p className="ml-8">Temperature </p>
                    <p className="">{weatherData.main ? weatherData.main.temp : "N/A"}°C</p>
                    </div>
                    <div className="flex font-bold text-xl flex-col items-center justify-center space-x-10 mt-20">
                    <p className="ml-8">Humidity </p>
                    <p className="">{weatherData.main ? weatherData.main.humidity : "N/A"}%</p>
                    </div>
                    <div className="flex font-bold text-xl flex-col items-center justify-center space-x-10 mt-20">
                    <p className="ml-8">Pressure </p>
                    <p className="">{weatherData.main ? weatherData.main.pressure : "N/A"}hPa</p>
                    </div>
                    <div className="flex font-bold text-xl flex-col items-center justify-center space-x-10 mt-20">
                    <p className="ml-8">Sunrise </p>
                    <p className="">{weatherData.sys ? (new Date(weatherData.sys.sunrise *1000)).toLocaleTimeString('en-GB', { timeZone: 'UTC' })  : "N/A"}</p>
                    </div>
                    <div className="flex font-bold text-xl flex-col items-center justify-center space-x-10 mt-20">
                    <p className="ml-8">Sunset </p>
                    <p className="">{weatherData.sys ? (new Date(weatherData.sys.sunset *1000)).toLocaleTimeString('en-GB', { timeZone: 'UTC' }) : "N/A"}</p>
                    </div>
</div>
    
                </div>
                
            )}
        </div>
        
</div>
    );
}

export default App;
