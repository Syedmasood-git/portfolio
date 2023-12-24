import React from 'react'
import './style.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (
    <div className='home'>
      <h2>Hello, I'm Syed Masood Hussaini</h2>
      <h1 className='h1'>I'm a Web Developer and I make websites that people love.</h1>
      <div className='social-div'>
        <FaInstagram className='social'/>
        <FaFacebookSquare className='social'/>
        <FaGithub className='social'/>
        <FaLinkedin className='social'/>
      </div>
      <div>
        <button className='btn'>Resume</button>
      </div>
      {/* <div className='line1'></div> */}
    </div>
  )
}

export default Home
