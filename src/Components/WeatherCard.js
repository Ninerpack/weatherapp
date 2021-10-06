import React, { useState, useEffect } from 'react'
import axios from 'axios'


function WeatherCard() {
  let api_key = "0a7f8003b0cb4b2993514953210610";

  // using axios to fetch data and display to console
  /*useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=San Francisco&aqi=no`)
    .then(response => {
      console.log(response)
    })
  })
   */
  // this will be replaced with API data
  let cities = [
    {
      name: "Santa Rosa",
      temp: 67,
      weather_type: "Cloudy",
    },
    {
      name: "San Fransisco",
      temp: 55,
      weather_type: "Cloudy",
    },
    {
      name: "Los Angeles",
      temp: 92,
      weather_type: "Sunny",
    },
    {
      name: "San Diego",
      temp: 70,
      weather_type: "Sunny",
    },
  ];
  return (
    <div className="ContainerCard">
      {cities.map((city, index) => (
        <div className="Card">
          <p className="Name" key={index}>
            {city.name}
          </p>
          <p className="Temp" key={index}>
            {city.temp + "°"}
          </p>
          <p className="Type" key={index}>
            {city.weather_type}
          </p>
        </div>
      ))}
    </div>
  );
}

export default WeatherCard
