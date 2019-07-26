import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PipsSprite } from '../images/pips.svg';

const DieStyles = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.35rem;
  width: 3rem;
  height: 3rem;
  font-size: 1.5em;
  margin: 0.5rem;
  background: #eee;
  border: 1px solid #ccc;
  overflow: hidden;
`;

const Pips = styled(PipsSprite)`
  position: absolute;
  width: 600%;
  height: 100%;
  top: 0;
  left: ${p => `-${(p.count - 1) * 100}%`};
  color: #666;
`;

export default function Die({ value, handleClick }) {
  return (
    <DieStyles onClick={() => handleClick(value)}>
      <Pips count={value} />
    </DieStyles>
  );
}
