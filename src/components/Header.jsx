import React from 'react'

const Header = () => {
  return (
    <div className="Header">
        <h1 className='Header-Title'>Recipe Book</h1>
        <input className="Header-SearchBar" placeholder='Search'/>
        <button className='Header-Button'>Login</button>
        <h1 className='Header-Text'>Contact</h1>
        <h1 className='Header-Text'>About</h1>
    </div> 
  )
}

export default Header