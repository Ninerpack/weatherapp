import React from 'react'
import WeatherCard from './WeatherCard'

const Body = ({searchTerm}) => {
  return (
    <div className='Body'>
      <WeatherCard searchTerm={ searchTerm }/>
    </div>
  )
}

export default Body
