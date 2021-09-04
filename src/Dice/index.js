import React from "react";
import Die from "./Die";
import "./Dice.css";

const Dice = ({ dice, handleClick, locked }) => {
  return (
    <div className="Dice">
      {dice.map((dice, index) => (
        <Die
          handleClick={handleClick}
          dice={dice}
          locked={locked[index]}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default Dice;
