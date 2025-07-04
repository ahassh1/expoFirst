import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import "./global.css"

export default function App() {
  return (
    <View style={styles.container}>
  
      <Text className="font-bold bg-green-400 text-purple-800">RN Developer polash !</Text>
      <Text className="underline font-semibold">It's my first expo project</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
