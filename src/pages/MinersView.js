import React, { useEffect, useState } from "react";
import socket from "../socket";
import { MINER_STATUS_MAP } from "../constants";
import "./MinersView.scss";

function MinersView() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    socket.on("tick", (...args) => {
      setDataList([...args[0].miners]);
    });
  }, []);

  return (
    <table className="common-table miners-view" cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Planet</th>
          <th>carryCapacity</th>
          <th>travelSpeed</th>
          <th>miningSpeed</th>
          <th>Position</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((minerObj) => (
          <tr key={minerObj._id}>
            <td className="color-white">{minerObj.name}</td>
            <td>{minerObj.planet.name}</td>
            <td
              className={minerObj.carryCapacity == 200 ? "color-success" : ""}
            >
              {minerObj.carryCapacity}/200
            </td>
            <td>{minerObj.travelSpeed}</td>
            <td>{minerObj.miningSpeed}</td>
            <td>
              <div className="fix-width">
                {parseInt(minerObj.x)},{parseInt(minerObj.y)}
              </div>
            </td>
            <td>
              <div className="fix-width">
                {MINER_STATUS_MAP[minerObj.status]}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default MinersView;
