import React from 'react';
import { sumArray } from '../helpers';

export default function Score({ gameState }) {
  const gameScore = sumArray(gameState.rounds);
  const roundScore = sumArray(gameState.diceInBank);

  return (
    <div>
      <h2>Score {gameScore}</h2>
      {gameState.rounds.map((r, i) => {
        return r !== null ? (
          <div key={i}>
            Round {i + 1}: {r === 0 ? 'FARKLE!' : r}
          </div>
        ) : null;
      })}
      <div>Current Round: {roundScore}</div>
    </div>
  );
}
