import React from "react";
import "./redglowspot.css";

const RedGlowSpots = () => (
  <div className="red-glow-spots">
    <div className="red-glow" style={{ top: "10%", left: "15%" }} />
    <div className="red-glow" style={{ top: "60%", left: "70%" }} />
    <div className="red-glow" style={{ top: "80%", left: "25%" }} />
    {/* Add more spots as you like */}
  </div>
);

export default RedGlowSpots;
