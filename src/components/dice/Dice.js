import React, { Fragment } from "react";
import Die from "./Die";
import "./Dice.css";

// Props: Game => dice (dice state), locked (index & boolean state), handleClick (function)

const Dice = (props) => {
  const test = () => {
    console.log(props);
  };

  return (
    <Fragment>
      <div className="Dice">
        {props.dice.map((value, index) => (
          <Die
            handleClick={props.handleClick}
            value={value}
            locked={props.locked[index]}
            index={index}
            key={index}
          />
        ))}
      </div>
      <button onClick={test}>Test</button>
    </Fragment>
  );
};

export default Dice;
