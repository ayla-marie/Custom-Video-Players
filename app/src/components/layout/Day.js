import React from "react";
import Video from "./Video";
import "../../App.css";
import abcsong from "./videos/abc-song.mp4";
import art from "./videos/art.mp4";
import ask2play from "./videos/askToPlay.mp4";
import nums123 from "./videos/numbers-1-20.mp4";
import pledge from "./videos/pledge.mp4";
import sciweather from "./videos/science-weather.mp4";

const videoAtoZ = [
  {
    src: abcsong,
    title: "Alphabet"
  },
  {
    src: art,
    title: "Drawing-Shapes"
  },
  {
    src: ask2play,
    title: "Friendships"
  },
  {
    src: nums123,
    title: "Counting"
  },
  {
    src: pledge,
    title: "Pledge"
  },
  {
    src: sciweather,
    title: "Weather"
  }
];

const Day = () => {
  return (
    <div className="day">
      {videoAtoZ.map(videoo => (
        <Video key={videoo.title} src={videoo.src}></Video>
      ))}
    </div>
  );
};

export default Day;
