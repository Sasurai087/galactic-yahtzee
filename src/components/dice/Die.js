import React, { Fragment } from "react";
import "./Die.css";

//Props: Dice => value(dice value), locked(index of dice), handleClick (function), key, index

const Die = (props) => {
  const test = () => {
    console.log(props);
  };

  return (
    <Fragment>
      <button
        className={"Die"}
        style={{ backgroundColor: props.locked ? "grey" : "black" }}
        onClick={props.handleClick("ahoy")}
      >
        {props.value}
      </button>
      <button onClick={test}>Woo</button>
    </Fragment>
  );
};

export default Die;
