import React from 'react'
import logo from '../../Assets/logo.png'
import './style.css'
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} width='40px' height='40px' alt=''/>
      </div>
      <div>
        <ul>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="whatIdo" smooth={true} duration={500}>What i Do</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
          <li><a target='__blank' href='https://wa.me/7975332059'>Let's Talk</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
