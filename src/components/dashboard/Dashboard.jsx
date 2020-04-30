import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import NavBar from "../NavBar";
import Player from "../images/player.png";
import GameDialog from "./GameDialog";

export default function Dashboard() {
  const [direction, setDirection] = useState("");
  const [roomData, setRoomData] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("/rooms")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/init")
      .then((res) => {
        console.log(res);
        setRoomData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleSubmit = (event) => {
    axiosWithAuth()
      .post("/move", { direction: direction })
      .then((res) => {
        console.log(res);
        setRoomData(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <div className="game-container">
      <div className="dialog-cont">
        <GameDialog key={roomData.id} data={roomData} />
      </div>
      <div className="game-section">
        <div className="first-row">
          <button
            onClick={() => {
              setDirection("n");
              handleSubmit();
            }}
          >
            North
          </button>
        </div>
        <div className="second-row">
          <button
            onClick={() => {
              setDirection("w");
              handleSubmit();
            }}
          >
            West
          </button>
          <button
            onClick={() => {
              setDirection("e");
              handleSubmit();
            }}
          >
            East
          </button>
        </div>
        <div className="third-row">
          <button
            onClick={() => {
              setDirection("s");
              handleSubmit();
            }}
          >
            South
          </button>
        </div>
        <div className="game-board">
          <img src={Player} className="player" alt="player-icon" />
          <div className="north-door"></div>
          <div className="south-door"></div>
          <div className="east-door"></div>
          <div className="west-door"></div>
        </div>
      </div>
    </div>
  );
}
