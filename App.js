import React from 'react';
import { StyleSheet, TouchableOpacity ,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>MENU</Text>
      <TouchableOpacity 
      onPress = {() => alert('Joke time')}
      style = {{backgroundColor: ' '}}>
      <Text style = {{fontSize: 20, color: 'black'}}>
      Stil Bored? Click me
      </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
