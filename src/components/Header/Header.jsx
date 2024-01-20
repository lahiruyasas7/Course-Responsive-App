import React from "react";
import "./Header.css";
import  NavBar  from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="wrapper">
      <div style={{justifyContent: 'center', display: 'flex'}}><NavBar /></div>
      
      <div className="cta">
        <p className="course-name">Sound Design MasterClass</p>
        <div className="red-bar"></div>
        <h1>Learn the art of sound track</h1>
        <a href="#" className="demo-btn">
          Demo Lesson
        </a>
      </div>
    </header>
  );
};

export default Header;
