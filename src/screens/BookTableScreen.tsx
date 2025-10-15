import { View, Text } from 'react-native';
import React, { useState } from 'react';

const BookTableScreen = () => {
  //add count example
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>BookTableScreen</Text>
      <Text>Count: {count}</Text>
      <Text onPress={() => setCount(count + 1)}>Increase Count</Text>
    </View>
  );
};

export default BookTableScreen;
