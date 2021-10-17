import React from 'react'
import WeatherCard from './WeatherCard'
import { useState } from 'react'

const Body = () => {
  const [cardCounter, setCardCounter] = useState(0);

  return (
    <div className="Body_container">
      <div className="Add_location">
        <button className="add_button" onClick={() => setCardCounter(current => current + 1)} id="card">
          Add Location
        </button>
      </div>
      <div className="Body" id="body">
        <div className="ContainerCard">
          {[...Array(cardCounter)].map((card, index) => <WeatherCard key={index}/>)}
        </div>
      </div>
    </div>
  );
}

export default Body
