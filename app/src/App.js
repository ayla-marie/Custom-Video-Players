import React from "react";
import Navbar from "./components/layout/Navbar";
import Day from "../src/components/layout/Day";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Day />
      <Day />
    </div>
  );
}

export default App;
