import React, { useState } from "react";
import "./Topics.css";
import topicImage01 from "../../assets/Rectangle 13.png";
import vocalProcessing from "../../assets/Rectangle 15.png";
import mixing from "../../assets/Rectangle 17.png";
import daw from "../../assets/Rectangle 18.png";
import mixingConsole from "../../assets/Rectangle 14.png";
import mastering from "../../assets/Rectangle 16.png";


const Topics = () => {
  const [currentImage, setCurrentImage] = useState(topicImage01)
  return (
    <section>
      <div className="title">What will you learn</div>
      <div className="red-bar"></div>
      <div className="body">
        <div className="topics-list">
          <ul>
            <li onMouseEnter={()=> setCurrentImage(topicImage01)}>What are frequencies?</li>
            <li onMouseEnter={()=> setCurrentImage(daw)}>Using DAW</li>
            <li onMouseEnter={()=> setCurrentImage(vocalProcessing)}>Vocal Processing</li>
            <li onMouseEnter={()=> setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={()=> setCurrentImage(mixingConsole)}>Mixing Console</li>
            <li onMouseEnter={()=> setCurrentImage(mastering)}>Mastering</li>
          </ul>
        </div>
        <div className="image-container">
          <img
            src={currentImage}
            style={{ width: "558px", height: "auto", objectFit: "cover" }}
          />
          <div className="yellow-bar"></div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
