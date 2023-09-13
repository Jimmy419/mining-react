import React from "react";
import "./Navigator.scss";
import { NavLink } from "react-router-dom";

export const Navigator = () => {
  return (
    <nav className="navigator">
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "active-link" : "none")}
      >
        <div className={"link-item"}>
          <span className="icon-miner nav-icon"></span>
          <div className="nav-text">Miners</div>
        </div>
      </NavLink>
      <NavLink
        to="/asteroids"
        className={(navData) => (navData.isActive ? "active-link" : "none")}
      >
        <div className="link-item">
          <span className="icon-asteroid nav-icon"></span>
          <div className="nav-text">Asteroids</div>
        </div>
      </NavLink>
      <NavLink
        to="/planets"
        className={(navData) => (navData.isActive ? "active-link" : "none")}
      >
        <div className="link-item">
          <span className="icon-planet nav-icon"></span>
          <div className="nav-text">Planets</div>
        </div>
      </NavLink>
    </nav>
  );
};
