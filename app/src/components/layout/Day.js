import React from "react";
import Video from "./Video";
import "../../App.css";
import abcsong from "./videos/abc-song.mp4";
import art from "./videos/draw-shapes.mp4";
import ask2play from "./videos/ask-to-play.mp4";
import nums123 from "./videos/num1-20.mp4";
import pledge from "./videos/pledge.mp4";
import sciweather from "./videos/weather-song.mp4";

const videoAtoZ = [
  {
    src: abcsong,
    title: "Learn the Alphabet"
  },
  {
    src: art,
    title: "Learn to Draw with Shapes"
  },
  {
    src: ask2play,
    title: "Asking a friend to play"
  },
  {
    src: nums123,
    title: "Counting 1-20"
  },
  {
    src: pledge,
    title: "Pledge of Allegiance"
  },
  {
    src: sciweather,
    title: "What's the Weather?"
  }
];

const Day = () => {
  return (
    <div className="day">
      {videoAtoZ.map(videoo => (
        <Video key={videoo.title} {...videoo}></Video>
      ))}
    </div>
  );
};

export default Day;
