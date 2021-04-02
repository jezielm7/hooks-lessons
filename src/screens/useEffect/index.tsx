import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// import { Container } from './styles';

const UseEffect: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('render');
  }, [counter]);

  // Async functions in useEffect
  useEffect(() => {
    async function getApiData() {
      await console.log('Api Data: {}');
    }
  }, [counter]);

  function sumCounter() {
    setCounter(counter => counter + 1)
  }

  return (
    <View>
      <Text>Counter: {counter}</Text>

      <TouchableOpacity onPress={sumCounter}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UseEffect;