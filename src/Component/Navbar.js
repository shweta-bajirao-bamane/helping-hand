import React from "react";
import "./Navbar.css";
import {Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-div">
      <h1><span>H</span>elping <span>H</span>ands</h1>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link to="/events">Events</Link>
        </li>
        <li className="nav-li">
          <Link to="/causes">Causes</Link>
        </li>
        <li className="nav-li">
          <Link to="/gallery">Gallery</Link>
        </li>
        </ul>
        <li className="con-btn">
          <Link to="/contact">Contact Now</Link>
          {/* <button className="bar-btn">Contact Now</button> */}
        </li>
       
        
      
      
      <Outlet/>
    </nav>
    
  );
};

export default Navbar;
