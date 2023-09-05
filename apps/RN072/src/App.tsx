import { useEffect, useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { echo } from 'react-native-testmodule';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  async function runProfilerAsync() {
    const beginTime = performance.now();
    for (let i = 0; i < 5000; ++i) {
      await echo('hello')
    }
    const endTime = performance.now();
    setResult(endTime - beginTime);
  }

  useEffect(() => {
    runProfilerAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
