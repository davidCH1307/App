import React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
import getDeck from '../util/newDeck';
import getTwoCards from '../util/drawTwoCards';

export default class BlackJack extends React.Component{

  
constructor() {
    super();
        this.state = {
         loading: true,
        Deck: {},
        playerHand: {},
        computerHand: {},
    }
    }


async startGameDeck(){
this.setState({
    Deck: await getDeck()
     })

await this.getStartCards()
}

async getStartCards(){
this.setState({
    playerHand: await getTwoCards(this.state.Deck.deck_id),
    computerHand: await getTwoCards(this.state.Deck.deck_id),
    })
}


render() {
return (
 <View style={styles.container}>
     <Text style = {styles.TitleText}>BlackJack</Text>
    <Button title="Start a new game" onPress={this.startGameDeck.bind(this)}/>
    <Text style={styles.QuoteText}>
    {/* {this.state.Deck.deck_id} */}
    Cards Remaining: {this.state.computerHand.remaining}
     </Text>
     <Text style={styles.QuoteText}>
    playerHand: {this.state.playerHand.value}
     </Text>
     <Text style={styles.QuoteText}>
    computerHand: {this.state.computerHand.value}
     </Text>
</View>
);
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
   // backgroundImage: 'url(http://wallpapercave.com/wp/cMFsvT9.png)',
    //backgroundSize: 'cover'
  },
  TitleText:{
    textAlign: 'center',
    fontSize: 36,
  },

  QuoteText:{
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 20
  }
});