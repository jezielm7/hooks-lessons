import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';

import { Container } from './styles';

const UseState: React.FC = () => {
  const [ counter, setCounter ] = useState(0);
  const [ showText, setShowText ] = useState(false);

  function sumCounter() {
    setCounter((counter) => counter + 1)
  }

  function showTxt() {
    setShowText(true);
  }

  function hideTxt() {
    setShowText(false);
  }

  return (
    <Container>
      <Text>Counter: {counter}</Text>

      <TouchableOpacity onPress={sumCounter}>
        <Text>Add</Text>
      </TouchableOpacity>

      {showText && <Text>Show Text</Text>}

      <TouchableOpacity onPress={showTxt}>
        <Text>Show</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={hideTxt}>
        <Text>Hide</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default UseState;