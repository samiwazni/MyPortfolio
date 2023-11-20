import React, { useState } from "react";
import samiwazni from "../Components/samiwazni.jpg"

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-text">
        <h3>I am a Software Engeneer</h3>
        <h1>My name is Sami Wazni</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since</p>
        <button>Contact Me!</button>
      </div>
      <div>
        <img src={samiwazni} />
      </div>
    </div>
  );
};

export default Hero;