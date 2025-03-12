import React from "react";
import "./Topics.css";
import topicImage01 from "../../assets/Rectangle 13.png";

const Topics = () => {
  return (
    <section>
      <div className="title">What will you learn</div>
      <div className="red-bar"></div>
      <div className="body">
        <div className="topics-list">
          <ul>
            <li>What are frequencies?</li>
            <li>Using DAW</li>
            <li>Vocal Processing</li>
            <li>Mixing</li>
            <li>Mixing Console</li>
            <li>Mastering</li>
          </ul>
        </div>
        <div className="image-container" style={{ backgroundColor: "blue" }}>
          <img
            src={topicImage01}
            style={{ width: "558px", height: "auto", objectFit: "cover" }}
          />
          <div className="yellow-bar"></div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
