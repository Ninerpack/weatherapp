import React from 'react'

function Header() {
    return (
      <div className="Header">
        Weather
        <nav className="Nav">
          <input type='input' placeholder='Search' className='Search'></input>
        </nav>
      </div>
    );
}

export default Header
