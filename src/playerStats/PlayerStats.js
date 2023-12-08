import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>JOHN DOE LEVEL 31</h1>
      <div id="playerStats__lines">
        <div id="playerStats__lines__thick"></div>
        <div id="playerStats__lines__thin"></div>
      </div>
      <h2>Full-Stack Developer</h2>
    </div>
    
  );
};

export default PlayerStats;