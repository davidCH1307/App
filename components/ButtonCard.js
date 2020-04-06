import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, SafeAreaView, Alert } from 'react-native';

export default class ButtonCard extends React.Component{

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Choose a game to play
      </Text>
      <Button title="flappy bird" onPress={() => Alert.alert('Launch Flappy Bird')}/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
