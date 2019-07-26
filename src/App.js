import React, { useState } from 'react';
import styled from 'styled-components';

const randomDie = () => Math.ceil(Math.random() * 6);

const newHand = () =>
  Array(6)
    .fill(null)
    .map(() => randomDie());

const Die = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  border-radius: 0.5rem;
  width: 3rem;
  height: 3rem;
  font-size: 2em;
  margin: 0.5rem;
`;

function App() {
  const [hand, setHand] = useState(newHand());

  return (
    <div>
      <header>
        <h1>Farkle</h1>
      </header>
      <main>
        In hand:{' '}
        {hand.map(d => (
          <Die key={d} value={d}>
            {d}
          </Die>
        ))}
      </main>
    </div>
  );
}

export default App;
