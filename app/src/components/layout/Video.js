import React from "react";
import "./progress.css";
import "../../App.css";
import { FaPlay, Fapause } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";

function Video() {
  const fullScreen = () => {
    return true;
  };

  return (
    <div className="masterVid">
      <video className="vid" />
      <div className="controls">
        <button className="playButton">
          <FaPlay size={20} />
        </button>
        <button className="fsButton" onClick={fullScreen}>
          <BsFullscreen size={20} />
        </button>
        <input
          type="range"
          class="progress"
          min="0"
          max="100"
          step="0.1"
          value="0"
        />
        <span class="timestamp">00:00</span>
      </div>
    </div>
  );
}

export default Video;
