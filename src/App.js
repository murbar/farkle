import React, { useState } from 'react';
// import styled from 'styled-components';
import Header from './components/Header';
import Controls from './components/Controls';
import Hand from './components/Hand';
import Bank from './components/Bank';

const randomDie = () => Math.ceil(Math.random() * 6);

const newHand = (numDice = 6) =>
  Array(numDice)
    .fill(null)
    .map(() => randomDie());

const removeDie = (hand, value) => {
  const i = hand.indexOf(value);
  if (i > -1) hand.splice(i, 1);
  return [...hand];
};

function App() {
  const [diceInHand, setDiceInHand] = useState(newHand());
  const [diceInBank, setDiceInBank] = useState([]);

  const rollDice = () => {
    setDiceInHand(prev => newHand(prev.length));
  };

  const addToBank = value => {
    setDiceInBank(prev => [...prev, value]);
    setDiceInHand(prev => removeDie(prev, value));
  };

  const removeFromBank = value => {
    setDiceInBank(prev => removeDie(prev, value));
    setDiceInHand(prev => [...prev, value]);
  };

  return (
    <div>
      <Header />
      <main>
        <Bank dice={diceInBank} remove={removeFromBank} />
        <Hand dice={diceInHand} addToBank={addToBank} />
        <Controls callbacks={{ rollDice }} />
      </main>
    </div>
  );
}

export default App;
