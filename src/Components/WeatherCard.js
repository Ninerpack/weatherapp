import React, { useState, useEffect } from 'react'
import axios from 'axios'


function WeatherCard() {
  let api_key = "0a7f8003b0cb4b2993514953210610";

  const [city, getCity] = useState('');

  const getData = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=San Francisco&aqi=no`)
      .then(response => {
        const allData = response.data;
        console.log(allData);
        //add data to state
        getCity(allData)
      })
    .catch(error => console.error(`Error: ${error}`))
  }

  // using axios to fetch data and display to console
  useEffect(() => {
    getData()
  },[]);

  return (
    <div className="ContainerCard">
      <div className="Card">
        <p className="Name">
          {city.location.name}
        </p>
        <p className="Temp">
          {city.current.temp_f}
        </p>
        <p className="Type">
          {city.current.condition.text}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard
