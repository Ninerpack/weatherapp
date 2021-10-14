import React from 'react'
import WeatherCard from './WeatherCard'

const Body = () => {
  return (
    <div className='Body'>
      <div className='Add_location'>
        <button className='add_button'> Add Location</button>
      </div>
      <WeatherCard />
    </div>
  )
}

export default Body
