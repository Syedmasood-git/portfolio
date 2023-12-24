import React from 'react'
import Header from '../Header'
import './style.css'
import Home from '../Home'


const BodyCard = () => {
  return (
    <div className='container'>
      <div className='line1'></div>
      <div className='line2'></div>
      <Header/>
      <Home/>
    </div>
  )
}

export default BodyCard
