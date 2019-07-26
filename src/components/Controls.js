import React from 'react';

export default function Controls({ gameState, callbacks }) {
  const bankEmpty = gameState.diceInBank.length === 0;

  return (
    <div>
      <button onClick={callbacks.rollDice}>Roll</button>
      {!bankEmpty && <button onClick={callbacks.endRound}>End Round</button>}
    </div>
  );
}
