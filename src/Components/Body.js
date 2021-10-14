import React from 'react'
import WeatherCard from './WeatherCard'
import { useState } from 'react'

const Body = () => {

  const [card, setCard] = useState(false);

  const addCard = () => {
    setCard(true)
    console.log(card);
    //return <WeatherCard />
  }

  return (
    <div className="Body_container">
      <div className="Add_location">
        <button className="add_button" onClick={() => addCard()}> Add Location</button>
      </div>
      <div className='Body'>
        {!card ? <p>No locations</p> : <WeatherCard />}
      </div>
    </div>
  );
}

export default Body
