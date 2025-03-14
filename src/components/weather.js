
import React, {useState} from 'react';
import { fetchWeather } from '../services/Weatherservices';
import "../App.css";



const Weather = () => {
  
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("Error");


    const getBackgroundColor = (temp) => {
        if (temp < 32) {
            return "#ff9800";
        } if (temp < 20) {
            return "#66ccff";
        } if (temp < 10) {
            return "#00aaff";
        } else {
            return "blue";
        }
    };

    const handlesearch = async () => {
        if (!city) return;
        setError("");
        

        const data = await fetchWeather(city);
        if (data){
            setWeatherData(data);
            document.body.style.backgroundColor = getBackgroundColor(data.main.temp);
        } else {
            setError("Not possible to fetch the weather data");
        }
};

return (
    
    <div className='weather-container'>
        <h2 className='title-weather'>WEATHER</h2>
        <input className='input-text'
            type="text"
            placeholder='CITY'
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        <button className='button' onClick={handlesearch}>Search</button>
        {error && <p className='error-text'>{}</p>}
        {weatherData && (
            <div className='weather-info'>
                <p className='input-city'>City: {weatherData.name}</p>
                <p className='input-temp'>Temperature: {weatherData.main.temp}°C</p>
                <p className='input-feels'>Feels like: {weatherData.main.feels_like}°C</p>
                <p className='input-humid'>Humidity: {weatherData.main.humidity}%</p>
            </div>
        )}

        <footer>
            <p className='footer-text'>Developed by: <a href="https://github.com/Cfsilveiras" target='blank'>DevSilveira</a></p>
        </footer>
    </div>
    


    
);

};



export default Weather;

//Componente criado para clima (O react trabalha na ideia de componentes, ou seja é um objeto ou uma ferramenta criada para utilizar em outros lugares do código)
//O componente é uma função que retorna um JSX (HTML dentro do JavaScript)
