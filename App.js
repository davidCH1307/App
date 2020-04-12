import React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
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
      <Button title="See Kanye's quote of the day." onPress={() => alert(this.state.quoteMeta.quote)}/>
      <Button title = "About" onPress = {() => alert ("David, Matt, Nikolas, Justin ")}/>
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
