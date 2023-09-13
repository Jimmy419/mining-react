import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import MinersView from "./pages/MinersView";
import AsteroidsView from "./pages/AsteroidsView";
import PlanetsView from "./pages/PlanetsView";
import socket from "./socket";
import { Mining } from "./components";

function App() {
  const [yearNo, setYearNo] = useState(0);
  useEffect(() => {
    socket.on("tick", (...args) => {
      setYearNo(args[0].currentTick);
    });
  }, []);

  return (
    <Layout
      leftSlot={
        <div className="view-content">
          <Routes>
            <Route path="/" element={<MinersView />} />
            <Route path="/asteroids" element={<AsteroidsView />} />
            <Route path="/planets" element={<PlanetsView />} />
          </Routes>
        </div>
      }
      rightSlot={
        <>
          <div className="font-16 color-white">{yearNo} YEARS</div>
          <Mining></Mining>
        </>
      }
    ></Layout>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
