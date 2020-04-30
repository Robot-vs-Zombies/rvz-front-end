import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import NavBar from "../NavBar";
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
    <div>
      <h1>The Game will be here, I think</h1>
      <button
        onClick={() => {
          setDirection("n");
          handleSubmit();
        }}
      >
        Move North
      </button>
      <button
        onClick={() => {
          setDirection("s");
          handleSubmit();
        }}
      >
        Move South
      </button>
      <button
        onClick={() => {
          setDirection("e");
          handleSubmit();
        }}
      >
        Move East
      </button>
      <button
        onClick={() => {
          setDirection("w");
          handleSubmit();
        }}
      >
        Move West
      </button>
    </div>
  );
}
