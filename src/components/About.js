import React from "react";
import "../Style/style.css";
import { NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdSquareOutline } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const About = () => {
  return (
    <div className="Skills">
      <h1>About Me!</h1>
      <ul className="About-nav">
        <li><a href="#experience"><IoPersonOutline />&nbsp;&nbsp;Experience</a></li>
        <li><a href="#education"><MdCastForEducation />&nbsp;&nbsp;Education</a></li>
        <li className="None"><NavLink to="/skills"><a href="#"><IoMdSquareOutline />&nbsp;&nbsp;Skiils</a></NavLink></li>
        <li className="None"><NavLink to="/form"><a href="#"><TfiEmail />&nbsp;&nbsp;Contact</a></NavLink></li>
      </ul>
      <p>
        I am currently studying ICT Engineering at Turku University of Applied
        Sciences and have a strong interest in software engineering. My previous
        studies have allowed me to develop my programming skills and I have
        experience working in a team environment. <br></br>
        <br></br>I am able to learn quickly and am able to effectively
        communicate with others. My goal is to continue to develop my
        programming abilities and contribute to the creation of innovative
        solutions in the field. <br></br>
        <br></br>As I near the end of my studies, I am seeking opportunities to
        work as a software engineer, Fullstack engineer, Frontend engineer, or
        Backend engineer within the ICT industry in Finland. In my free time, I
        engage in physical activities such as gym training and walking in
        nature, and I also enjoy reading and playing video games.
      </p>

      <h2 id="experience">Experience</h2>
      <h4>Front-End Web Developer</h4>
      <p>
        Draivi (Draivi Media Oy) · Full-time<br></br>
        <br></br>
        In my capacity as a Front-End Web Developer at Draivi, I hold a pivotal
        role in guaranteeing an exceptional online experience for our users. My
        daily responsibilities span both front-end and back-end facets of web
        development, enabling me to enrich the overall functionality and
        aesthetic appeal of Draivi's websites. Additionally, I actively engage
        in A/B testing initiatives aimed at further enhancing our online
        platforms.<br></br>
        <span>Skills:</span> TortoiseGit · A/B Testing · SASS · jQuery · PHP ·
        CSS · WordPress · Git · JavaScript · HTML5
      </p>

      <h4>Entrepreneur</h4>
      <p>
        Tekniikkatie · Self-employed<br></br>
        <br></br>
        Design and implement websites, online stores, web Applications, and
        booking websites with multi-languages. Guide the customers to use these
        resources and update their texts, images, etc.Design and implement
        websites, online stores, web Applications, and booking websites with
        multi-languages. Guide the customers to use these resources and update
        their texts, images, etc. .<br></br>
        <span>Skills:</span> Sales · Entrepreneurship · Web Development · Web
        Design · Web Applications
      </p>

      <h4>Software Developer</h4>
      <p>
        theFIRMA · Part-time<br></br>
        <br></br>
        Our team is dedicated to continuously adding new features and addressing
        any bugs to ensure a smooth user experience. As a Front End developer,
        my primary focus is on designing and implementing user-facing elements,
        ensuring an intuitive and visually appealing interface for our users.
        Project Gate is a web application for Turku University of Applied
        Sciences students to provide theFIRMA available projects. <br></br>
        Project Gate was developed using full-stack technology.<br></br>
        <span>Skills:</span> HTML · CSS · Semantic UI · Node.js · JavaScript
      </p>

      <h4>Museum IT Assistant</h4>
      <p>
        Turun kaupunki - Åbo stad - City of Turku · Part-time<br></br>
        <br></br>I have created a website dedicated to showcasing the museums
        located in Southwest Finland. This website serves as a guide for
        visitors, providing information on all available museums in Southwest
        Finland, including their location, hours of operation, entry price, and
        exhibits. The website also includes interactive features such as virtual
        tours and event calendars. The goal of this website is to make it easy
        for visitors to plan their visit and discover the unique offerings of
        each museum in the region.www.museotnyt.fi I have created a website
        dedicated to showcasing the museums located in Southwest Finland. This
        website serves as a guide for visitors, providing information on all
        available museums in Southwest Finland, including their location, hours
        of operation, entry price, and exhibits. The website also includes
        interactive features such as virtual tours and event calendars. The goal
        of this website is to make it easy for visitors to plan their visit and
        discover the unique offerings of each museum in the region.<br></br>
        <span>Skills:</span> CSS · WordPress · JavaScript
      </p>
      <h2 id="education">Education</h2>

      <h4>Turku University of Applied Sciences</h4>
      <p>
        Bachelor of Engineering, Information and communication technology.<br></br>
        2020 - 2024<br></br><br></br>
        <span>Skills:</span> Teamwork · Python · Node Js · React Js · WordPress · Git
      </p>

      <h4>Turku Vocational Institute</h4>
      <p>
      Basic examination, Information and communication technologies.<br></br>
        2019 - 2020<br></br><br></br>
        <span>Skills:</span> Teamwork · JavaScript · Python · WordPress · Git
      </p>
    </div>
    
  );
};

export default About;