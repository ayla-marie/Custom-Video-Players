import React from "react";
import Video from "./Video";
import "../../App.css";

const Day = () => {
  return (
    <div class="day">
      <Video
        id="reading"
        src="https://www.youtube.com/embed/36IBDpTRVNE?controls=0"
      />
      <Video
        id="math"
        src="https://www.youtube.com/embed/8lE9uiJuMes?start=82"
      />
    </div>
  );
};

export default Day;
