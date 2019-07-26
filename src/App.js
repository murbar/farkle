import React, { useState } from 'react';
import styled from 'styled-components';

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

const Header = () => {
  return (
    <header>
      <h1>Farkle</h1>
    </header>
  );
};

const DieStyles = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
  border-radius: 0.5rem;
  width: 3rem;
  height: 3rem;
  font-size: 2em;
  margin: 0.5rem;
`;

const Die = ({ value, handleClick }) => {
  return <DieStyles onClick={() => handleClick(value)}>{value}</DieStyles>;
};

const Hand = ({ dice, addToBank }) => {
  return (
    <div>
      <h3>Hand</h3>
      {dice.map(v => (
        <Die value={v} handleClick={addToBank} />
      ))}
    </div>
  );
};

const Bank = ({ dice, remove }) => {
  return (
    <div>
      <h3>Bank</h3>
      {dice.map(v => (
        <Die value={v} handleClick={remove} />
      ))}
    </div>
  );
};

const Controls = ({ callbacks }) => {
  return (
    <div>
      <button onClick={callbacks.rollDice}>Roll</button>
    </div>
  );
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
