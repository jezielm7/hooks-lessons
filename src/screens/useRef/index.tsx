import React, { useState, useRef,  } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const UseRef: React.FC = () => {
  const counter = useRef<number>(1);

  function log() {
    if(counter.current) {
      counter.current = counter.current + 1;

      console.log(counter.current);
    }
  };

  return (
    <View style={{ paddingHorizontal: 5, }}>
      {console.log(counter)}
      <TextInput
        style={{
          marginTop: 10,
          borderWidth: 1,   
          paddingLeft: 10,
        }}
        ref={counter}
        placeholder="Email"
      />

      <TouchableOpacity onPress={log}>
        <Text>Log</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UseRef;