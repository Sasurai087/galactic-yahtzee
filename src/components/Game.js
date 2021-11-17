import React, { useState } from "react";
import Dice from "./dice/Dice";
import ScoreTable from "./logic/ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

const Game = () => {
  const [gameState, setGameState] = useState({
    dice: Array.from({ length: NUM_DICE }),
    locked: Array(NUM_DICE).fill(false),
    rollsLeft: NUM_ROLLS,
    scores: {
      ones: undefined,
      twos: undefined,
      threes: undefined,
      fours: undefined,
      fives: undefined,
      sixes: undefined,
      threeOfKind: undefined,
      fourOfKind: undefined,
      fullHouse: undefined,
      smallStraight: undefined,
      largeStraight: undefined,
      yahtzee: undefined,
      chance: undefined,
    },
  });

  const rollDice = () => {
    // roll dice whose indexes are in reroll
    setGameState((prevState) => ({
      dice: prevState.dice.map((d, i) =>
        prevState.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked:
        prevState.rollsLeft > 1 ? prevState.locked : Array(NUM_DICE).fill(true),
      rollsLeft: prevState.rollsLeft - 1,
    }));
  };

  const toggleLocked = (index) => {
    // toggle whether index is in locked or not
    // setGameState((prevState) => ({
    //   locked: [
    //     ...prevState.locked.slice(0, index),
    //     !prevState.locked[index],
    //     ...prevState.locked.slice(index + 1),
    //   ],
    // }));
    console.log(index);
  };

  const handleScoring = (ruleName, ruleFunction) => {
    // evaluate this ruleFunction with the dice and score this ruleName
    setGameState((prevState) => ({
      scores: { ...prevState.scores, [ruleName]: ruleFunction(prevState.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }));

    rollDice();
  };

  console.log(gameState);

  return (
    <div className="Game">
      <header className="Game-header">
        <h1 className="App-title">Yahtzee!</h1>

        <section className="Game-dice-section">
          <Dice
            dice={gameState.dice}
            locked={gameState.locked}
            handleClick={toggleLocked}
          />
          <div className="Game-button-wrapper">
            <button
              className="Game-reroll"
              disabled={gameState.locked.every((x) => x)}
              onClick={rollDice}
            >
              {gameState.rollsLeft} Rerolls Left
            </button>
          </div>
        </section>
      </header>
      {/* <ScoreTable onScoring={handleScoring} scores={gameState.scores} /> */}
    </div>
  );
};

export default Game;
