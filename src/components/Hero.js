import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import sami from "../Images/sami.JPEG"

const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="Hero">
        <div className="Hero-text">
          <h3>I am a Software Engeneer</h3>
          <h1>Sami Wazni</h1>
          <p>
            I am currently studying ICT Engineering at Turku University of
            Applied Sciences and have a strong interest in software engineering.
          </p>
          <NavLink to="/form"><button>Contact Me!</button></NavLink>
        </div>
      </div>
      <div>
        <img src={sami} alt="Logo" />
      </div>
    </div>
  );
};

export default Hero;
