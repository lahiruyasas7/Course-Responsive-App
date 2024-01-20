import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return <div className="nav">
    <div><a href="#" className="logo">Sound<span>DZing</span></a></div>
    <div className="nav-items" style={{display: 'flex', gap: '50px'}}>
      <a href="#">CourseDetails</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Testimonials</a>
    </div>
  </div>;
};

export default Navbar;
