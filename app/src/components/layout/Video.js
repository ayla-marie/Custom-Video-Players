import React, { useState, useEffect } from "react";
import "./progress.css";
import "../../App.css";
import { FaPlay, FaPause, FaFastBackward, FaFastForward } from "react-icons/fa";

function Video(props) {
  const { src, title } = props;
  const [timedata, setTimedata] = useState({});
  const [progressbar, setprogressbar] = useState({});
  const [playIt, setPlayIt] = useState();
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

  useEffect(() => {
    //updates the progressbar as % of videotime run
    let thisVideo = divRef.current;
    setInterval(() => {
      //timestamp function
      if (timedata) {
        let thisVideo = divRef.current;
        var min = Math.floor(thisVideo.currentTime / 60);
        var sec = Math.floor(thisVideo.currentTime % 60);
        if (sec < 10) {
          sec = "0" + String(sec);
        }
      }
      //set value on the progress bar every second
      if (progressbar) {
        progressRef.current.value =
          (thisVideo.currentTime / thisVideo.duration) * 100;
        var val = progressRef.current.value;
      }
      //make object out of min and sec for timestamp
      setprogressbar({ val });
      setTimedata({ min, sec });
    }, 1000);
  }, [timedata, progressbar]);

  return (
    <div className="masterVid">
      <p>{title}</p>
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
        <input
          type="range"
          className="progress"
          ref={progressRef}
          min="0"
          max="100"
          step="0.1"
          value={setprogressbar.val}
        />
        <FaFastBackward className="skip" size={20} />
        <p ref={timestampRef} data={setTimedata} className="timestamp">
          {timedata.min}:{timedata.sec}
        </p>
        <FaFastForward className="skip" size={20} />
      </div>
    </div>
  );
}

export default Video;
