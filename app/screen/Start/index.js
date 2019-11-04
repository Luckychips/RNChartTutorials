import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ababab;
`;

const StartPage = props => {
  return (
    <Container>
      <Text>START PAGE!</Text>
    </Container>
  );
}

export default StartPage;
