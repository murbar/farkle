import React from 'react';
import Die from './Die';

export default function Hand({ gameState, addToBank }) {
  return (
    <div>
      <h3>Hand</h3>
      {gameState.diceInHand.map((v, i) => (
        <Die key={`${i}${v}`} value={v} handleClick={addToBank} />
      ))}
    </div>
  );
}
