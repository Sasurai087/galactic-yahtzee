import React, { useState, useEffect } from "react";
import Dice from "./Dice";
import "./App.css";

export default function Game() {
  //useState set to Array.from to allow user configurable amount of dices
  const [gameState, setGameState] = useState({
    dice: Array.from({ length: 5 }),
    locked: Array(5).fill(false),
  });

  //Dice roll function - takes previous state of dice and applies math.random on each array object in state
  function roll() {
    setGameState((state) => ({
      ...gameState,
      dice: state.dice.map((dice, index) =>
        //Go through each die, then if die's locked state is false, return a random number between 1-6. Else, return the die as is.
        state.locked[index] ? dice : Math.ceil(Math.random() * 6)
      ),
    }));
  }

  function toggleLocked(index) {
    setGameState((state) => ({
      ...gameState,
      locked: [
        ...state.locked.slice(0, index),
        !state.locked[index],
        ...state.locked.slice(index + 1),
      ],
    }));
  }

  //Immediately roll dice as soon as app loads in
  useEffect(() => {
    roll();
  }, []);

  return (
    <div className="Game">
      <header className="Game-header">
        <section className="Dice-section">
          <Dice
            dice={gameState.dice}
            locked={gameState.locked}
            handleClick={toggleLocked}
          />
          <button className="Roll-button" onClick={roll}>
            Roll
          </button>
          <button
            className="Roll-button"
            onClick={() => console.log(gameState)}
          >
            State
          </button>
        </section>
      </header>
      Score Table Here
    </div>
  );
}
