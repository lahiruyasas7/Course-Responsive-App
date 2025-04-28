import React from "react";
import studentIcon from "../../assets/noto_student-light-skin-tone.svg";
import videoIcon from "../../assets/flat-color-icons_video-file.svg";
import redRectangleIcon from "../../assets/red-retangle-bar.svg";
import "./Info.css";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-container">
            <img src={studentIcon} alt="student icon" />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>
          <div className="info-container">
            <img src={videoIcon} alt="video icon" />
            <div className="amount">26 HRS</div>
            <div className="type">Students</div>
          </div>
        </div>
        <img
          className="bg-element-2"
          src={redRectangleIcon}
          alt="red rectangle icon"
        />
      </div>
    </section>
  );
};

export default Info;
