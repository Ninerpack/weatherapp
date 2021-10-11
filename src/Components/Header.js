import React from 'react'

const Header = ({setSearchTerm}) => {
  const handleInput = e => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }
  return (
    <div className="Header">
    Weather
    <nav className="Nav">
      <input type='text' onChange={handleInput} placeholder='Search Cities' className='Search'></input>
      <button id='search_button' type='submit'> Search</button>
    </nav>
  </div>
  )
}

export default Header
