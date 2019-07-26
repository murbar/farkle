import React from 'react';

export default function Controls({ callbacks }) {
  return (
    <div>
      <button onClick={callbacks.rollDice}>Roll</button>
    </div>
  );
}
