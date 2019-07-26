import React from 'react';
import styled from 'styled-components';

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

export default function Die({ value, handleClick }) {
  return <DieStyles onClick={() => handleClick(value)}>{value}</DieStyles>;
}
