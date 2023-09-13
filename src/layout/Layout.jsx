import React from "react";
import "./Layout.scss";
import { Header } from "./Header";
import { Navigator } from "./Navigator";

export const Layout = ({ leftSlot, rightSlot }) => {
  return (
    <main className="main-box">
      <Header></Header>
      <div className="main-content">
        <div className="left-part">
          <Navigator></Navigator>
          {leftSlot}
        </div>
        <div className="right-part">{rightSlot}</div>
      </div>
    </main>
  );
};
