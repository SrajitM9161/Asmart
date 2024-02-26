import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../API/oneCall_Api.config';
import '../CSS/Wheather.css';

const Weather = () => {
  const [emoji, setEmoji] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState({ city: '', country: '' });

  useEffect(() => {
    const getGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}`;

            axios.get(weatherApiUrl)
              .then(response => {
                const iconCode = response.data.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
                setEmoji(iconUrl);

                const currentTemperature = response.data.main.temp;
                setTemperature(Math.round(currentTemperature - 273.15));

                const city = response.data.name || '';
                const country = response.data.sys.country || '';

                setLocation({ city, country });
              })
              .catch(error => {
                console.error('Error fetching weather data:', error);
                console.error('Response:', error.response);
              });
          },
          (error) => {
            alert('Please confirm the location', error);
          }
        );
      } else {
        alert('Please confirm the location .');
      }
    };

    getGeolocation();
  }, []);

  return (
    <div className="weather-info">
      <div className="location">
        <p>{`${location.city}, ${location.country}`}</p>
      </div>
      {emoji && <img src={emoji} alt="Weather Icon" />}
      {temperature !== null && (
        <p> {temperature}°C</p>
      )}
    </div>
  );
};

export default Weather;
