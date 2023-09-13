import React, { useState, useEffect } from "react";
import "./MinerCreator.scss";
import { PopUp, FormItem } from "../../common";
import { getMinersListApi, createMinersApi } from "../../api";
import { MINER_IDLE_STATUS } from "../../constants";

export function MinerCreator({
  show,
  planetList,
  onClose,
  planetId,
  dataSaved,
}) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [planet, setPlanet] = useState("");
  const [planetError, setPlanetError] = useState("");
  const [carryCapacity, setCarryCapacity] = useState(0);
  const [carryCapacityError, setCarryCapacityError] = useState("");

  const [travelSpeed, setTravelSpeed] = useState(0);
  const [travelSpeedError, setTravelSpeedError] = useState("");

  const [miningSpeed, setMiningSpeed] = useState(0);
  const [miningSpeedError, setMiningSpeedError] = useState("");

  useEffect(() => {
    setPlanet(planetId ? planetId : "");
  }, [planetId]);

  const setMinerPosition = () => {
    const positionO = { x: 0, y: 0 };
    if (planetList && planet) {
      for (let i = 0; i < planetList?.length; i++) {
        if (planet == planetList[i]._id) {
          positionO.x = planetList[i].position.x;
          positionO.y = planetList[i].position.y;
        }
      }
    }
    return positionO;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    checkIfMinerExist(name, () => {
      if (validateForm()) {
        const dataToPost = {
          name,
          planet,
          carryCapacity,
          travelSpeed,
          miningSpeed,
          ...setMinerPosition(),
          angle: 90,
          status: MINER_IDLE_STATUS,
          minerals: 1000,
        };
        createMinersApi(dataToPost).then(() => {
          dataSaved();
        });
      }
    });
  };

  const checkIfMinerExist = (minerName, fun) => {
    let ifExist = false;
    getMinersListApi().then(({ data }) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == minerName) {
          ifExist = true;
          break;
        }
      }
      if (ifExist) {
        setNameError("This name is already taken.");
      } else {
        setNameError("");
        fun();
      }
    });
  };

  const validateForm = () => {
    let valid = true;

    if (!name) {
      setNameError("Please input a name");
      valid = false;
    } else {
      setNameError("");
    }

    if (!planet) {
      setPlanetError("Please choose a planet");
      valid = false;
    } else {
      setPlanetError("");
    }

    if (!carryCapacity) {
      setCarryCapacityError("Please input a carryCapacity");
      valid = false;
    } else {
      setCarryCapacityError("");
    }

    if (!travelSpeed) {
      setTravelSpeedError("Please input a travelspeed");
      valid = false;
    } else {
      setTravelSpeedError("");
    }

    if (!miningSpeed) {
      setMiningSpeedError("Please input a miningSpeed");
      valid = false;
    } else {
      setMiningSpeedError("");
    }

    return valid;
  };

  return (
    <PopUp show={show} header="Create a miner" onClose={onClose}>
      <form onSubmit={handleSubmit} className="miner-creator">
        <FormItem label="Name" name="name" error={nameError}>
          <input
            className="form-item-kit"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormItem>
        <FormItem label="Planet" name="planet" error={planetError}>
          <select
            className="form-item-kit"
            id="planet"
            value={planet}
            onChange={(e) => setPlanet(e.target.value)}
          >
            {planetList.map((planetObj) => (
              <option key={planetObj._id} value={planetObj._id}>
                {planetObj.name}
              </option>
            ))}
          </select>
        </FormItem>

        <div className="inner-title">Assign points</div>
        <div className="sub-form-box">
          <div className="sub-form-box-item">
            <FormItem
              label="carryCapacity"
              name="carryCapacity"
              error={carryCapacityError}
            >
              <input
                type="number"
                className="form-item-kit"
                id="carryCapacity"
                value={carryCapacity}
                onChange={(e) => setCarryCapacity(e.target.value)}
              />
            </FormItem>
          </div>
          <div className="sub-form-box-item">
            <FormItem
              label="travelSpeed"
              name="travelSpeed"
              error={travelSpeedError}
            >
              <input
                type="number"
                className="form-item-kit"
                id="travelSpeed"
                value={travelSpeed}
                onChange={(e) => setTravelSpeed(e.target.value)}
              />
            </FormItem>
          </div>
          <div className="sub-form-box-item">
            <FormItem
              label="miningSpeed"
              name="miningSpeed"
              error={miningSpeedError}
            >
              <input
                type="number"
                className="form-item-kit"
                id="miningSpeed"
                value={miningSpeed}
                onChange={(e) => setMiningSpeed(e.target.value)}
              />
            </FormItem>
          </div>
        </div>
        <div className="totl">
          Total: -{miningSpeed}/{Number(carryCapacity) + Number(travelSpeed)}
        </div>
        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </PopUp>
  );
}
