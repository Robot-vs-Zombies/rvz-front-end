import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import NavBar from "../NavBar";
import Player from "../images/player.png";
export default function Dashboard() {
  const [direction, setDirection] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get("/api/adv/init/")
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const handleSubmit = (event) => {
    axiosWithAuth()
      .post("/api/adv/move", { direction: direction })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  console.log(direction);

  return (
    <div className="game-container">
      <h1>The Game will be here, I think</h1>
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
        <img src={Player} className="player" />
        <div className="north-door"></div>
        <div className="south-door"></div>
        <div className="east-door"></div>
        <div className="west-door"></div>
      </div>
    </div>
  );
}
