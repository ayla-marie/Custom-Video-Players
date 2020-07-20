import React, { useState, useEffect } from "react";
import "./progress.css";
import "../../App.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";

function Video(props) {
  const { src, title } = props;
  const [playIt, setPlayIt] = useState();
  const [pauseIt, setPauseIt] = useState();
  const [vidProgress, getVidProgress] = useEffect();
  const timestampRef = React.useRef();
  const divRef = React.useRef();
  const progressRef = React.useRef();

  //play on click
  if (playIt) {
    divRef.current.play();
  }
  //pause on click
  if (pauseIt) {
    divRef.current.pause();
  }
  //progress: not working
  if (vidProgress) {
    progressRef.vlue = (divRef.currentTime / divRef.duration) * 100;
    let min = Math.floor(divRef.currentTime / 60);
    if (min < 10) {
      min = "0" + String(min);
    }
    let sec = Math.floor(divRef.currentTime % 60);
    if (sec < 10) {
      sec = "0" + String(sec);
    }
    timestampRef.innerText = `${min}: ${sec}`;
  }

  return (
    <div className="masterVid">
      <label for={divRef}>{title}</label>
      <video ref={divRef} src={src} className="vid" disablePictureInPicture />
      <div className="controls">
        <button onClick={setPlayIt} className="playButton">
          <FaPlay size={20} />
        </button>
        <button className="pauseButton" onClick={setPauseIt}>
          <FaPause size={20} />
        </button>
        <input
          type="range"
          className="progress"
          min="0"
          max="100"
          step="0.1"
          value="0"
          onTimeUpdate={getVidProgress}
          readOnly
        />
        <span ref={timestampRef} className="timestamp">
          00:00
        </span>
      </div>
    </div>
  );
}

export default Video;
