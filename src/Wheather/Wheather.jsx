import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../API/oneCall_Api.config'
const Weather = () => {
  const [emoji, setEmoji] = useState('');
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);

  useEffect(() => {
   
    const getGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}`;
         
            axios.get(apiUrl)
              .then(response => {
                const iconCode = response.data.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
                setEmoji(iconUrl);
                const minTemperature = response.data.main.temp_min;
                const maxTemperature = response.data.main.temp_max;
                setMinTemp(Math.round(minTemperature - 273.15)); 
                setMaxTemp(Math.round(maxTemperature - 273.15));
              })
              .catch(error => {
                console.error('Error fetching weather data:', error);
                console.error('Response:', error.response);
              });
          },
          (error) => {
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    getGeolocation();
  }, []);

  return (
    <div className="weather-info">
      {emoji && <img src={emoji} alt="Weather Icon" />}
      {minTemp !== null && maxTemp !== null && (
        <p>
          Min {minTemp}°C, Max {maxTemp}°C
        </p>
      )}
    </div>
  );
};

export default Weather;
