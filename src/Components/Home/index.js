import React from "react";
import "./style.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import resume from 'file:///C:/Users/Syeda%20Twaseen/Downloads/masoodCV.pdf'

const Home = () => {
  return (
    <motion.div initial={{ y: 300 }} whileInView={{ y: 0 }} viewport={{ once: true }} className="home">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Hello, I'm Syed Masood Hussaini</h2>
        <h1 className="h1">
          I'm a Web Developer and I make websites that people love.
        </h1>
      </motion.div>
      <div className="social-div">
        <FaInstagram className="social" onClick={()=>window.open('https://www.instagram.com/syed_masood_46/', '_blank')}/>
        <FaFacebookSquare className="social" onClick={()=>window.open('https://www.facebook.com/profile.php?id=100045762546447', '_blank')}/>
        <FaGithub className="social" onClick={()=>window.open('https://github.com/Syedmasood-git', '_blank')} />
        <FaLinkedin className="social" onClick={()=>window.open('https://www.linkedin.com/in/syed-masood-/', '_blank')} />
      </div>
      <div className="btn-div">
        <a href={resume} target="_blank">
        <motion.button
          initial={{ y: -100, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10, delay: 1 }}
          className="btn"
        >
          Resume
        </motion.button></a>
      </div>
    </motion.div>
  );
};

export default Home;
