import React from "react";

const GameDialog = (props) => {
  return (
    <div className="game-info-cont">
      <h1>Navigation Information</h1>
      <hr />
      <h2>Location</h2>
      <p>You are currently in {props.data.title}</p>
      <hr />
      <h2>Area description</h2>
      <p>You look around, and {props.data.description}</p>
      <hr />
      <h2>Players in room with you</h2>
      <div className="player-info">
        {!props.data.players ? (
          <p>No players</p>
        ) : (
          props.data.players.map((p) => {
            return <p>{p}</p>;
          })
        )}
      </div>
    </div>
  );
};

export default GameDialog;
