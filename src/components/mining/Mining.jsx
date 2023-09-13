import React, { useEffect, useState } from "react";
import socket from "../../socket";
import "./Mining.scss";
import PlanetNode from "./PlanetNode";

export function Mining() {
  const [dataSource, setDataSource] = useState({});
  useEffect(() => {
    socket.on("tick", (...args) => {
      // console.log("args", args);
      setDataSource({ ...args[0] });
      // console.log("dataSource", dataSource);
    });
  }, []);

  return (
    <div className="map-box">
      <img className="mining-map" src="/images/Background.png" alt="map" />
      {dataSource.planets &&
        dataSource.planets.map((planetObj) => (
          <div
            className="planet-box"
            key={planetObj._id}
            style={{
              left: (planetObj.position.x * 100) / 1000 + "%",
              top: (planetObj.position.y * 100) / 1000 + "%",
            }}
          >
            <PlanetNode planetObj={planetObj}></PlanetNode>
          </div>
        ))}

      {dataSource.asteroids &&
        dataSource.asteroids.map((asteroidObj) => (
          <div
            className="asteroid-box"
            v-for="asteroidObj in dataSource.asteroids"
            key={asteroidObj._id}
            style={{
              left: (asteroidObj.position.x * 100) / 1000 + "%",
              top: (asteroidObj.position.y * 100) / 1000 + "%",
            }}
          >
            <img
              className="asteroid-img"
              src="/images/asteroid-icon.svg"
              alt="img"
            />
          </div>
        ))}

      {dataSource.miners &&
        dataSource.miners.map((minerObj) => (
          <span
            className="icon-miner"
            v-for="minerObj in dataSource.miners"
            key={minerObj._id}
            style={{
              left: (minerObj.x * 100) / 1000 + "%",
              top: (minerObj.y * 100) / 1000 + "%",
              transform:
                "translate(-50%, -50%) rotate(" +
                (minerObj.angle + 90) +
                "deg)",
            }}
          ></span>
        ))}
    </div>
  );
}
