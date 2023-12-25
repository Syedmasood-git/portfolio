import React from 'react'
import Header from '../Components/Header'
import './style.css'
import Home from '../Components/Home'
import {motion} from 'framer-motion'


const BodyCard = () => {
  return (
    <div className='container'>
      <motion.div initial={{opacity:0}} animate={{opacity:1,rotate:130}} transition={{delay:.5,duration:1.4}} className='line1'></motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1,rotate:45}} transition={{delay:.5,duration:1.4}} className='line2'></motion.div>
      <Header/>
      <Home/>
    </div>
  )
}

export default BodyCard
