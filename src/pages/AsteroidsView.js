import React, { useEffect, useState } from "react";
import socket from "../socket";

function AsteroidsView() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    socket.on("tick", (...args) => {
      setDataList([...args[0].asteroids]);
    });
  }, []);

  return (
    <table className="common-table" cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Minerals</th>
          <th>Current miner</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((item) => (
          <tr key={item._id}>
            <td className="color-white">{item.name}</td>
            <td className={item.minerals == 0 ? "color-fail" : "none"}>
              {item.minerals}
            </td>
            <td>{item.currentMiner ? item.currentMiner.name : ""}</td>
            <td>
              {item.position.x},{item.position.y}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default AsteroidsView;
