import React from "react";
import { BiFoodMenu } from "react-icons/bi";
import "./style.css";

const WhatIdo = () => {
  return (
    <div id="whatIdo" className="whatIdo-div">
      <h1>What I Do</h1>
      <div className="cards">
        <div className="box">
          <BiFoodMenu className="food-menu" />
          <p className="para">
            Do you need to redesign a site or improve the design of your site to
            imporve experiance of the customers
          </p>
          <h3 className="additional-text">I can doi it</h3>
        </div>
        <div className="box">
          <BiFoodMenu className="food-menu" />
          <p className="para">
            Do you need to create a great site like the one you are seeing?
          </p>
          <h3 className="additional-text">I can help you with that</h3>
        </div>
        <div className="box">
          <BiFoodMenu className="food-menu" />
          <p className="para">
            Not all designers handle HTML and CSS, However, I have ability to prototype and layout in HTML, CSS, JS, ReactJs. I use some libraries like Bootstrap, Material UI. I have learned NodeJs at basic level 
          </p>
          <h3 className="additional-text">I am not an unicorn</h3>
        </div>
      </div>
    </div>
  );
};

export default WhatIdo;
