import React from 'react';
import { StyleSheet, TouchableOpacity ,Text, View, Button } from 'react-native';
import getQuote from './util/RandomQuoteApi';

export default class App extends React.Component {

  constructor() {
    super();
      this.state = {
        loading: true,
        quoteMeta: {},
    }
  }


  async componentDidMount() {
    this.setState({
    quoteMeta: await getQuote(),
    })
  }

  render() {
  return (
    <View style={styles.container}>
      <Text>MENU</Text>
      <TouchableOpacity 
      onPress = {() => alert('Joke time')}
      style = {{backgroundColor: ' '}}>
      <Text style = {{fontSize: 20, color: 'black'}}>
      About
      </Text>
      </TouchableOpacity>

      <Text style={styles.paragraph}>
        See Kanye's quote of the day.
      </Text>
      <Button title="get quote" onPress={() => alert(this.state.quoteMeta.quote)}/>

    </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
