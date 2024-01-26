import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';

const Api = 'https://api.openweathermap.org/data/3.0/onecall?';
const Api_key = '2fd78c2d78cf482962ad6675405386c1'; 

const Weather = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
     let data=`${Api}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${Api_key}`
     axios.get(data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, []);

  return (
    <div>
      {/* Add your weather component rendering logic here */}
    </div>
  );
};

export default Weather;
