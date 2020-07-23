import React, { useState, useEffect } from "react";
import "./progress.css";
import "../../App.css";
import { FaPlay, FaPause, FaExpand } from "react-icons/fa";

function Video(props) {
  const { src, title } = props;
  // const {min, setMin} = useState();
  const [playIt, setPlayIt] = useState();
  const [size, changeSize] = useState();
  const divRef = React.useRef();
  const progressRef = React.useRef();
  const timestampRef = React.useRef();

  //play and pause on click
  if (playIt) {
    divRef.current.play();
    console.log("calling play");
  } else {
    if (divRef.current) {
      divRef.current.pause();
    }
  }

  //Fullscreen and ReduceScreen
  if (size) {
    console.log("toggle style");
  }

  useEffect(() => {
    //updates the progressbar as % of videotime run
    let thisVideo = divRef.current;
    let thisProgress = progressRef.current;
    const interval = setInterval(() => {
      thisProgress.value = (thisVideo.currentTime / thisVideo.duration) * 100;
    }, 1000);
  });

  return (
    <div className="masterVid">
      <p val={title}></p>
      <video ref={divRef} src={src} className="vid" allowFullScreen />
      <div className="controls">
        <FaPlay
          onClick={function() {
            setPlayIt(true);
          }}
          className="playButton"
          size={20}
        />
        <FaPause
          size={20}
          className="pauseButton"
          onClick={() => {
            setPlayIt(false);
          }}
        />
        <FaExpand size={20} className="fullScreen" onClick={changeSize} />
        <input
          type="range"
          className="progress"
          ref={progressRef}
          min="0"
          max="100"
          step="0.1"
          value="0"
          readOnly
        />
        <span ref={timestampRef} className="timestamp"></span>
      </div>
    </div>
  );
}

export default Video;
