import React from 'react';
import styled from 'styled-components';
import DiscountForm from './DiscountForm/DiscountForm';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 440px;
  font-family: Work Sans;
  background-color: #cccccc;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

function App() {
  return (
    <Wrapper>
      <DiscountForm />
    </Wrapper>
  );
}

export default App;
