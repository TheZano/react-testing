import React from 'react';
import styled from 'styled-components';

export const Card = ({ text }) => {
  return <Container>{text}</Container>;
};

const Container = styled.div`
  background-color: 'white';
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
`;
