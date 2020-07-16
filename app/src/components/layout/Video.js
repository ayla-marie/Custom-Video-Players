import React from "react";
import "./progress.css";
import "../../App.css";
import { FaPlay, FaStop, Fapause } from "react-icons/fa";

function Video() {
  return (
    <div>
      <label for="vid"></label>
      <iframe class="vid" src="" allowFullScreen="true" sandbox></iframe>
      <div class="controls">
        <button class="playButton">
          <FaPlay size={20} />
        </button>
        <button class="stopButton">
          <FaStop size={20} />
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
