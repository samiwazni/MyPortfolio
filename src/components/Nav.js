import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
        <ul>
            <li to="/">Home</li>
            <li to="/skills">Skills</li>
            <li to="/form">Form</li>
        </ul>
      
    </nav>
  );
};

export default Nav;