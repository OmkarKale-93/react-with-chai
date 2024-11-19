import { useState, useEffect } from "react";

const useWeatherData = (city) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_SECRET}`);
                if (!response.ok) throw new Error("Failed to fetch weather data.");
                
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (city) fetchWeatherData();
    }, [city]);

    return { weatherData, loading, error };
};

export default useWeatherData;
