import React, { useState } from "react";
import "../Style/style.css"

const Hero = () => {
  return (
    <div className="Container">
      <div className="Hero">
        <div className="Hero-text">
          <h3>I am a Software Engeneer</h3>
          <h1>Sami Wazni</h1>
          <p>
            I am currently studying ICT Engineering at Turku University of
            Applied Sciences and have a strong interest in software engineering.
          </p>
          <button>Contact Me!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
