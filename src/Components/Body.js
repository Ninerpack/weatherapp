import React from 'react'
import WeatherCard from './WeatherCard'
import { useState } from 'react'

const Body = () => {

  const [card, setCard] = useState(false);
  const [cardCounter, setCardCounter] = useState(1);

  const cardHolder = [cardCounter];

  const addNewCard = () => {
    setCard(true);
    cardHolder.push(setCardCounter + 1)
  }

  return (
    <div className="Body_container">
      <div className="Add_location">
        <button className="add_button" onClick={() => addNewCard()} id="card">
          Add Location
        </button>
      </div>
      <div className="Body" id="body">
        <div className="ContainerCard">
          {cardHolder(cardCounter).map((card, index) => <WeatherCard key={ index }/>)}
        </div>
      </div>
    </div>
  );
}

export default Body
