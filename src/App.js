import React from "react";
import "./App.css";
import BodyCard from "./BodyCard";
import { animate, motion } from "framer-motion"
import WhatIdo from "./Components/WhatIdo";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.4}}>
      <BodyCard/>
      <WhatIdo/>
      <Portfolio/>
    </motion.div>
  );
};

export default App;
