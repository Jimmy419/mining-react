import React, { useEffect, useState } from "react";
import socket from "../socket";
import "./PlanetsView.scss";
import { MinerCreator } from "../components";
import { PopUp } from "../common";

function PlanetsView() {
  const [dataList, setDataList] = useState([]);
  const [planetId, setPlanetId] = useState(null);
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    socket.on("tick", (...args) => {
      setDataList([...args[0].planets]);
    });
  }, []);

  const dataSaved = () => {
    setShow(false);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const onClose = () => {
    setShow(false);
  };

  const createItem = (item) => {
    setShow(true);
    setPlanetId(item._id);
  };

  return (
    <>
      <PopUp show={showMessage}>The miner was successfully created</PopUp>
      <MinerCreator
        show={show}
        planetId={planetId}
        planetList={dataList}
        onClose={onClose}
        dataSaved={dataSaved}
      ></MinerCreator>
      <table
        className="common-table planets-view"
        cellPadding="0"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Miners</th>
            <th>Minerals</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr key={item._id}>
              <td className="color-white">{item.name}</td>
              <td>{item.miners}</td>
              <td>
                <div
                  className={item.minerals >= 1000 ? "color-success" : "none"}
                >
                  {item.minerals}/1000
                </div>
              </td>
              <td>
                {item.minerals >= 1000 && (
                  <span className="action-kit" onClick={() => createItem(item)}>
                    <span className="icon-add-miner"></span>
                    <span> Create a miner</span>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default PlanetsView;
