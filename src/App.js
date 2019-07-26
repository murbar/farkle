import React, { useState } from 'react';
import styled from 'styled-components';

const randomDie = () => Math.ceil(Math.random() * 6);

const newHand = (numDice = 6) =>
  Array(numDice)
    .fill(null)
    .map(() => randomDie());

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
  return <DieStyles onClick={handleClick}>{value}</DieStyles>;
};

const Hand = ({ dice }) => {
  return (
    <div>
      <h3>Hand</h3>
      {dice.map(d => (
        <Die value={d} />
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

  const rollDice = () => {
    setDiceInHand(prev => newHand(prev.length));
  };

  return (
    <div>
      <Header />
      <main>
        <Hand dice={diceInHand} />
        <Controls callbacks={{ rollDice }} />
      </main>
    </div>
  );
}

export default App;
