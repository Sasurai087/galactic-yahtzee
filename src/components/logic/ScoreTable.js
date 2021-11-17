import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from "./Rules";

// Props: Game = onScoring (scoring function), scores (state)
const ScoreTable = (props) => {
  const { scores, onScoring } = props;

  return (
    <div className="ScoreTable">
      <section className="ScoreTable-section">
        <h2>Upper</h2>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
              name="Ones"
              score={scores.ones}
              onScoring={(evt) => onScoring("ones", ones.evalRoll)}
            />
            <RuleRow
              name="Twos"
              score={scores.twos}
              onScoring={(evt) => onScoring("twos", twos.evalRoll)}
            />
            <RuleRow
              name="Threes"
              score={scores.threes}
              onScoring={(evt) => onScoring("threes", threes.evalRoll)}
            />
            <RuleRow
              name="Fours"
              score={scores.fours}
              onScoring={(evt) => onScoring("fours", fours.evalRoll)}
            />
            <RuleRow
              name="Fives"
              score={scores.fives}
              onScoring={(evt) => onScoring("fives", fives.evalRoll)}
            />
            <RuleRow
              name="Sixes"
              score={scores.sixes}
              onScoring={(evt) => onScoring("sixes", sixes.evalRoll)}
            />
          </tbody>
        </table>
      </section>
      <section className="ScoreTable-section ScoreTable-section-lower">
        <h2>Lower</h2>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
              name="Three of Kind"
              score={scores.threeOfKind}
              onScoring={(evt) =>
                onScoring("threeOfKind", threeOfKind.evalRoll)
              }
            />
            <RuleRow
              name="Four of Kind"
              score={scores.fourOfKind}
              onScoring={(evt) => onScoring("fourOfKind", fourOfKind.evalRoll)}
            />
            <RuleRow
              name="Full House"
              score={scores.fullHouse}
              onScoring={(evt) => onScoring("fullHouse", fullHouse.evalRoll)}
            />
            <RuleRow
              name="Small Straight"
              score={scores.smallStraight}
              onScoring={(evt) =>
                onScoring("smallStraight", smallStraight.evalRoll)
              }
            />
            <RuleRow
              name="Large Straight"
              score={scores.largeStraight}
              onScoring={(evt) =>
                onScoring("largeStraight", largeStraight.evalRoll)
              }
            />
            <RuleRow
              name="Yahtzee"
              score={scores.yahtzee}
              onScoring={(evt) => onScoring("yahtzee", yahtzee.evalRoll)}
            />
            <RuleRow
              name="Chance"
              score={scores.chance}
              onScoring={(evt) => onScoring("chance", chance.evalRoll)}
            />
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ScoreTable;
