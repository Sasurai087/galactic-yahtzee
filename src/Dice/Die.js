import React from "react";
import "./Die.css";

const Die = ({ dice, handleClick, index, locked }) => {
  return (
    <button
      className={"Die"}
      onClick={() => handleClick(index)}
      style={{ backgroundColor: locked ? "grey" : "black" }}
    >
      {dice}
    </button>
  );
};

export default Die;
