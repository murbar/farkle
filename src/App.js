import React, { useState } from 'react';
// import styled from 'styled-components';
import Header from './components/Header';
import Controls from './components/Controls';
import Hand from './components/Hand';
import Bank from './components/Bank';
import useHotKeys from './hooks/useHotKeys';

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
  const [gameState, setGameState] = useState({
    diceInHand: newHand(),
    diceInBank: []
  });

  const rollDice = () => {
    setGameState(prev => ({
      ...prev,
      diceInHand: newHand(prev.diceInHand.length)
    }));
  };

  const addToBank = value => {
    setGameState(prev => ({
      ...prev,
      diceInHand: removeDie(prev.diceInHand, value),
      diceInBank: [...prev.diceInBank, value]
    }));
  };

  const removeFromBank = value => {
    setGameState(prev => ({
      ...prev,
      diceInHand: [...prev.diceInHand, value],
      diceInBank: removeDie(prev.diceInBank, value)
    }));
  };

  useHotKeys({
    // debug
    d: () => console.log(gameState)
  });

  return (
    <div>
      <Header />
      <main>
        <Bank dice={gameState.diceInBank} remove={removeFromBank} />
        <Hand dice={gameState.diceInHand} addToBank={addToBank} />
        <Controls callbacks={{ rollDice }} />
      </main>
    </div>
  );
}

export default App;
