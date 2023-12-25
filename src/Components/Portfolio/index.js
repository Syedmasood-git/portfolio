import React from 'react'
import './style.css'
import img1 from '../../Assets/crypto.png'
import img2 from '../../Assets/yt.png'
import img3 from '../../Assets/blinkit.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio'>
      <h1>Portfolio</h1>
      <div className='p-card'>
        <div className='p-left'>
            <h3>Crypto-Tracker</h3>
            <p>The purpose this website is to serve the details about crypto coins in which user can login/signup and view the current price and old prices. The special part in this is a user can compare two crypto coins and evaluste the best one. This website was created using ReactJS, FireBase, Firestore,Framer-Motion </p>
            <button className='btn'>Look</button>
        </div>
        <div className='p-right'>
            <img src={img1} width='300px' height='200px' alt=''/>
        </div>
      </div>
      <div className='p-card'>
        <div className='p-left'>
            <h3>Youtube Clone</h3>
            <p>This website is created same as YouTube by fetching its real-time data by youtube Data API. In this we can watch videos and search the videos and we can alse see the comments. This website is created using HTML, CSS, JavaScript.   </p>
            <button className='btn'>Look</button>
        </div>
        <div className='p-right'>
            <img src={img2} width='300px' height='200px' alt=''/>
        </div>
      </div>
      <div className='p-card'>
        <div className='p-left'>
            <h3>BlinkIt clone</h3>
            <p>This website is created as blinkit website where there are a lot of items and categories. This website is creayed using HTML and CSS </p>
            <button className='btn'>Look</button>
        </div>
        <div className='p-right'>
            <img src={img3} width='300px' height='200px' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
