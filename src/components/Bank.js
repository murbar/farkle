import React from 'react';
import Die from './Die';

export default function Bank({ gameState, remove }) {
  return (
    <div>
      <h3>Bank</h3>
      {gameState.diceInBank.map((v, i) => (
        <Die key={`${i}${v}`} value={v} handleClick={remove} />
      ))}
    </div>
  );
}
