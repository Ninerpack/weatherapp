import React from 'react'

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
  }
];

function WeatherCard() {
    return (
      <div className="ContainerCard">
        <div className="Card">
            {cities.map((city, idx) => {
                return <div className="CityName" key={idx}>{city.name}</div>
            })}
        </div>
      </div>
    );
}

export default WeatherCard
