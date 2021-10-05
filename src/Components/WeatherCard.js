import React from 'react'


function WeatherCard() {
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
                <p className='Name' key={ index }>{ city.name }</p>
                <p className='Temp' key={ index }>{ city.temp }</p>
                <p className='Type' key={ index }>{ city.weather_type }</p>
              </div>
            ))}
      </div>
    );
}

export default WeatherCard
