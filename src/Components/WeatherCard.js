import React, { useState, useEffect } from 'react'
import axios from 'axios'


function WeatherCard() {
  let api_key = "0a7f8003b0cb4b2993514953210610";

  const [city, getCity] = useState('');
  const [temp, getTemp] = useState('');
  const [condition, getCondition] = useState('');

  const getData = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=San Francisco&aqi=no`)
      .then(response => {
        const cityName = response.data.location.name;
        const temp = response.data.current.temp_f;
        const weatherCondition = response.data.current.condition.text;

        getCity(cityName);
        getTemp(temp);
        getCondition(weatherCondition);
      })
    .catch(error => console.error(`Error: ${error}`))
  }

  // using axios to fetch data
  useEffect(() => {
    getData()
  },[]);

  return (
    <div className="ContainerCard">
      <div className="Card">
        <p className="Name">
          {city}
        </p>
        <p className="Temp">
          {temp}
        </p>
        <p className="Type">
          {condition}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard
