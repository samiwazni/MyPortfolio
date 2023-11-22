import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { IoPersonOutline } from "react-icons/io5";
import { BsBack } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="Nav">
      <ul>
        <NavLink to="/">
          <li>
            <a className="link">
                <GrHomeRounded />
              <span>Home</span>
            </a>
          </li>
        </NavLink>
        <NavLink to="/about">
          <li>
            <a className="link">
            <IoPersonOutline />
              <span>About</span>
            </a>
          </li>
        </NavLink>
        <NavLink to="/skills">
          <li>
            <a className="link">
            <BsBack />
              <span>Skills</span>
            </a>
          </li>
        </NavLink>
        <NavLink to="/form">
          <li>
            <a className="link">
            <TfiEmail />
              <span>Form</span>
            </a>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
