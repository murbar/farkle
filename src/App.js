import React, { useState } from 'react';
import uuid from 'uuid/v4';
// import styled from 'styled-components';
import Header from './components/Header';
import Controls from './components/Controls';
import Hand from './components/Hand';
import Bank from './components/Bank';
import useHotKeys from './hooks/useHotKeys';
import Score from './components/Score';

import { sumArray } from './helpers';

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

export default function App() {
  const [gameState, setGameState] = useState({
    gameId: uuid(),
    rounds: Array(10).fill(null),
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

  const endRound = () => {
    setGameState(prev => {
      const currentRound = prev.rounds.indexOf(null);
      const rounds = prev.rounds;
      rounds[currentRound] = sumArray(prev.diceInBank);
      return {
        ...prev,
        diceInHand: newHand(),
        diceInBank: [],
        rounds
      };
    });
  };

  useHotKeys({
    // debug
    d: () => console.log(gameState)
  });

  return (
    <div>
      <Header />
      <main>
        <Score gameState={gameState} />
        <Bank gameState={gameState} remove={removeFromBank} />
        <Hand gameState={gameState} addToBank={addToBank} />
        <Controls gameState={gameState} callbacks={{ rollDice, endRound }} />
      </main>
    </div>
  );
}
