import React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
import getQuote from '../util/RandomQuoteApi';

export default class Quarantine_Time extends React.Component{
  
  constructor() {
    super();
      this.state = {
        loading: true,
        quoteMeta: {},
    }
  }

  async handleClick() {
    this.setState({
      quoteMeta: await getQuote(),
    })
  }

  render() {
  return (
    <View style={styles.container}>
      <Text style = {styles.TitleText}>Welcome to Kanye's World</Text>
      <Button title="Get a random quote from Kanye" onPress={this.handleClick.bind(this)}/>
      <Text style={styles.QuoteText}>
      {this.state.quoteMeta.quote}
      </Text>
    </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    backgroundImage: 'url(http://wallpapercave.com/wp/cMFsvT9.png)',
    backgroundSize: 'cover'
  },
  TitleText:{
    textAlign: 'center',
    fontSize: 36,
  },

  QuoteText:{
    textAlign: 'center',
    fontSize: 36,
    borderRadius: 20
  }
});