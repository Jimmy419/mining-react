import React from "react";
import "./PlanetNode.scss";

function PlanetNode({ planetObj }) {
  return (
    <div className="planet-cube">
      {planetObj && planetObj.name === "Planet 1" && (
        <div className="planet planet-one">
          <img className="planet-img" src="/images/planet-1.png" alt="img" />
        </div>
      )}
      {planetObj && planetObj.name == "Planet 2" && (
        <div className="planet planet-two">
          <img className="planet-img" src="/images/planet-2.png" />
        </div>
      )}
      {planetObj && planetObj.name == "Planet 3" && (
        <div className="planet planet-three">
          <img className="planet-img" src="/images/planet-3.png" />
        </div>
      )}

      <div
        className={
          "current-miner" +
          (planetObj && planetObj.minerals >= 1000 ? " done" : "")
        }
      >
        {planetObj ? planetObj.minerals : 0} / 1000
      </div>
    </div>
  );
}
export default PlanetNode;
