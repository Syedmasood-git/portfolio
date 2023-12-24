import React from 'react'
import logo from '../../Assets/logo.png'
import './style.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} width='40px' height='40px' alt=''/>
      </div>
      <div>
        <ul>
          <li>About</li>
          <li>What i Do</li>
          <li>Portfolio</li>
          <li>Let's Talk</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
