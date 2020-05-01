import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
// import NavBar from "../NavBar";
import Player from "../images/player.png";
import GameDialog from "./GameDialog";

export default function Dashboard() {
  const [roomData, setRoomData] = useState({});
  const [allRooms, setAllRooms] = useState([]);
  // door active booleans
  const [northRoomActive, setNorthRoomActive] = useState(false);
  const [southRoomActive, setSouthRoomActive] = useState(false);
  const [westRoomActive, setWestRoomActive] = useState(false);
  const [eastRoomActive, setEastRoomActive] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get("/rooms")
      .then((res) => {
        console.log(res, "rooms");
        setAllRooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosWithAuth()
      .get("/init")
      .then((res) => {
        console.log(res, "init");
        setRoomData(res.data);

        res.data.n_to ? setNorthRoomActive(true) : setNorthRoomActive(false);
        res.data.s_to ? setSouthRoomActive(true) : setSouthRoomActive(false);
        res.data.e_to ? setEastRoomActive(true) : setEastRoomActive(false);
        res.data.w_to ? setWestRoomActive(true) : setWestRoomActive(false);
      })
      .catch((err) => {
        console.log(err.response);
      });

    // check what rooms are to the north, east, south, west,
    // set them as active if they are or inactive if they're not

    //north: id

    //south: id

    //east: id

    //west: id
  }, []);

  const handleSubmit = (direction) => {
    axiosWithAuth()
      .post("/move", { direction: direction })
      .then((res) => {
        console.log(res, "Current room we have moved into");
        setRoomData(res.data);
        res.data.n_to ? setNorthRoomActive(true) : setNorthRoomActive(false);
        res.data.s_to ? setSouthRoomActive(true) : setSouthRoomActive(false);
        res.data.e_to ? setEastRoomActive(true) : setEastRoomActive(false);
        res.data.w_to ? setWestRoomActive(true) : setWestRoomActive(false);
        // check what rooms are to the north, east, south, west,
        // set them as active if they are or inactive if they're not
      })
      .catch((res) => {
        console.log(res);
      });
  };

  console.log(allRooms, "All rooms in world");

  return (
    <div className="game-container">
      <div className="dialog-cont">
        <GameDialog key={roomData.id} data={roomData} />
      </div>
      <div className="game-section">
        <h1>Robots vs Zombies</h1>
        <div className="first-row">
          <button
            onClick={() => {
              handleSubmit("n");
            }}
          >
            North
          </button>
        </div>
        <div className="second-row">
          <button
            onClick={() => {
              handleSubmit("w");
            }}
          >
            West
          </button>
          <button
            onClick={() => {
              handleSubmit("e");
            }}
          >
            East
          </button>
        </div>
        <div className="third-row">
          <button
            onClick={() => {
              handleSubmit("s");
            }}
          >
            South
          </button>
        </div>
        {!roomData.error_msg ? (
          <p>Please select a direction...</p>
        ) : (
          <p>You cannot go that way!</p>
        )}
        <div className="game-board">
          <img src={Player} className="player" alt="player-icon" />
          {northRoomActive ? <div className="north-door"></div> : null}
          {southRoomActive ? <div className="south-door"></div> : null}
          {eastRoomActive ? <div className="east-door"></div> : null}
          {westRoomActive ? <div className="west-door"></div> : null}
        </div>
      </div>
    </div>
  );
}
