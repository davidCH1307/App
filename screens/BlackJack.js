import React from 'react';
import { StyleSheet,Text, View, Button, ImageBackground, Image, Row} from 'react-native';
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
<ImageBackground source= {require('../assets/BlackJackBackground.jpg')} style= {styles.container}>
 <View>
     <Text style = {styles.TitleText}>BlackJack</Text>
    <Button title="Start a new game" onPress={this.startGameDeck.bind(this)}/>
    <Text style={styles.QuoteText}>
    {/* {this.state.Deck.deck_id} */}
    Cards Remaining: {this.state.computerHand.remaining}
     </Text>

     <Text style={styles.QuoteText}>
    playerHand: {this.state.playerHand.value}
     </Text>
     <Image style={styles.Pic}
         source={{uri: this.state.playerHand.image1}}
     />
     <Image style={styles.Pic}
         source={{uri: this.state.playerHand.image2}}
     />

     <Text style={styles.QuoteText}>
    computerHand: {this.state.computerHand.value}
     </Text>
     <Image style={styles.Pic}
         source={{uri: this.state.computerHand.image1}}
     />
     <Image style={styles.Pic}
         source={{uri: this.state.computerHand.image2}}
     />

</View>
</ImageBackground>
);
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TitleText:{
    textAlign: 'center',
    fontSize: 36,
    color: "black"
  },

  QuoteText:{
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 20,
    color: "black"
  },

  Pic:{
    height: 100,
     width: 70,
  },
});