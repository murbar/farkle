import React from 'react';
import Die from './Die';

export default function Bank({ dice, remove }) {
  return (
    <div>
      <h3>Bank</h3>
      {dice.map((v, i) => (
        <Die key={`${i}${v}`} value={v} handleClick={remove} />
      ))}
    </div>
  );
}
