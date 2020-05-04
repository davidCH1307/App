import React from 'react';
import { StyleSheet,Text, View, Button, ImageBackground, Image, Row} from 'react-native';
import getDeck from '../util/newDeck';
import getTwoCards from '../util/drawTwoCards';
import getOneCard from '../util/drawOneCard';

export default class BlackJack extends React.Component{
  
constructor() {
    super();
        this.state = {
         loading: true,
        Deck: {},
        playerHand: {},
        computerHand: {},
        playerCount: 0,
        computerCount: 0,
        playerImages: [],
        computerImages: [],
        computerHiddenImages: [],
        computerHiddenCount: 0,
        winText: ""
    }
    }


async startGameDeck(){
this.setState({
    Deck: await getDeck(),
    playerCount: 0,
    computerCount: 0,
    playerImages: [],
    computerImages: [],
    winText: "",
    computerHiddenCount: "???",
    computerHiddenImages: ["https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png", "https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png"]
     })

await this.getStartCards()
await this.updateCardsTwo()
}

async getStartCards(){
this.setState({
    playerHand: await getTwoCards(this.state.Deck.deck_id),
    computerHand: await getTwoCards(this.state.Deck.deck_id),
    })
}

async updateCardsTwo(){
  var val1 = 0;
  var val2 = 0;
  var val3 = 0;
  var val4 = 0;

  //check for first player card
  if(this.state.playerHand.value1  == "2"){
    val1 = 2;
  }
  if(this.state.playerHand.value1  == "3"){
    val1 = 3;
  }
  if(this.state.playerHand.value1  == "4"){
    val1 = 4;
  }
  if(this.state.playerHand.value1  == "5"){
    val1 = 5;
  }
  if(this.state.playerHand.value1  == "6"){
    val1 = 6;
  }
  if(this.state.playerHand.value1  == "7"){
    val1 = 7;
  }
  if(this.state.playerHand.value1  == "8"){
    val1 = 8;
  }
  if(this.state.playerHand.value1  == "9"){
    val1 = 9;
  }
  if(this.state.playerHand.value1  == "10"){
    val1 = 10;
  }
  if(this.state.playerHand.value1  == "JACK"){
    val1 = 10;
  }
  if(this.state.playerHand.value1  == "QUEEN"){
    val1 = 10;
  }
  if(this.state.playerHand.value1  == "KING"){
    val1 = 10;
  }
  if(this.state.playerHand.value1  == "ACE"){
    val1 = 11;
  }

  //check for second player card
  if(this.state.playerHand.value2  == "2"){
    val2 = 2;
  }
  if(this.state.playerHand.value2  == "3"){
    val2 = 3;
  }
  if(this.state.playerHand.value2  == "4"){
    val2 = 4;
  }
  if(this.state.playerHand.value2  == "5"){
    val2 = 5;
  }
  if(this.state.playerHand.value2  == "6"){
    val2 = 6;
  }
  if(this.state.playerHand.value2  == "7"){
    val2 = 7;
  }
  if(this.state.playerHand.value2  == "8"){
    val2 = 8;
  }
  if(this.state.playerHand.value2  == "9"){
    val2 = 9;
  }
  if(this.state.playerHand.value2  == "10"){
    val2 = 10;
  }
  if(this.state.playerHand.value2  == "JACK"){
    val2 = 10;
  }
  if(this.state.playerHand.value2  == "QUEEN"){
    val2 = 10;
  }
  if(this.state.playerHand.value2  == "KING"){
    val2 = 10;
  }
  if(this.state.playerHand.value2  == "ACE"){
    val2 = 11;
  }

  //check for first comp card
  if(this.state.computerHand.value1  == "2"){
    val3 = 2;
  }
  if(this.state.computerHand.value1  == "3"){
    val3 = 3;
  }
  if(this.state.computerHand.value1  == "4"){
    val3 = 4;
  }
  if(this.state.computerHand.value1  == "5"){
    val3 = 5;
  }
  if(this.state.computerHand.value1  == "6"){
    val3 = 6;
  }
  if(this.state.computerHand.value1  == "7"){
    val3 = 7;
  }
  if(this.state.computerHand.value1  == "8"){
    val3 = 8;
  }
  if(this.state.computerHand.value1  == "9"){
    val3 = 9;
  }
  if(this.state.computerHand.value1  == "10"){
    val3 = 10;
  }
  if(this.state.computerHand.value1  == "JACK"){
    val3 = 10;
  }
  if(this.state.computerHand.value1  == "QUEEN"){
    val3 = 10;
  }
  if(this.state.computerHand.value1  == "KING"){
    val3 = 10;
  }
  if(this.state.computerHand.value1  == "ACE"){
    val3 = 11;
  }

  //check for second comp card
  if(this.state.computerHand.value2  == "2"){
    val4 = 2;
  }
  if(this.state.computerHand.value2  == "3"){
    val4 = 3;
  }
  if(this.state.computerHand.value2  == "4"){
    val4 = 4;
  }
  if(this.state.computerHand.value2  == "5"){
    val4 = 5;
  }
  if(this.state.computerHand.value2  == "6"){
    val4 = 6;
  }
  if(this.state.computerHand.value2  == "7"){
    val4 = 7;
  }
  if(this.state.computerHand.value2  == "8"){
    val4 = 8;
  }
  if(this.state.computerHand.value2  == "9"){
    val4 = 9;
  }
  if(this.state.computerHand.value2  == "10"){
    val4 = 10;
  }
  if(this.state.computerHand.value2  == "JACK"){
    val4 = 10;
  }
  if(this.state.computerHand.value2  == "QUEEN"){
    val4 = 10;
  }
  if(this.state.computerHand.value2  == "KING"){
    val4 = 10;
  }
  if(this.state.computerHand.value2  == "ACE"){
    val4 = 11;
  }
  //update count and images
  var image1array = [this.state.playerHand.image1, this.state.playerHand.image2];
  var image2array = [this.state.computerHand.image1, this.state.computerHand.image2];

  this.setState({
    playerCount: (this.state.playerCount + val1 + val2),
    computerCount: (this.state.computerCount + val3 + val4),
    playerImages: this.state.playerImages.concat(image1array),
    computerImages: this.state.computerImages.concat(image2array),
    })

  if(this.state.playerCount > 21 || this.state.computerCount == 21){
      this.setState({
        winText: "You Lose :(",
        computerHiddenImages: this.state.computerImages,
        computerHiddenCount: this.state.computerCount,
      })
  }

  if(this.state.playerCount == 21 || this.state.computerCount > 21){
    this.setState({
      winText: "YOU WIN!!!",
      computerHiddenImages: this.state.computerImages,
      computerHiddenCount: this.state.computerCount,
    })
  }
}

async updateCardsOne(){
  var val1 = 0;

  //check for player card
  if(this.state.playerHand.value  == "2"){
    val1 = 2;
  }
  if(this.state.playerHand.value  == "3"){
    val1 = 3;
  }
  if(this.state.playerHand.value  == "4"){
    val1 = 4;
  }
  if(this.state.playerHand.value  == "5"){
    val1 = 5;
  }
  if(this.state.playerHand.value  == "6"){
    val1 = 6;
  }
  if(this.state.playerHand.value  == "7"){
    val1 = 7;
  }
  if(this.state.playerHand.value  == "8"){
    val1 = 8;
  }
  if(this.state.playerHand.value  == "9"){
    val1 = 9;
  }
  if(this.state.playerHand.value  == "10"){
    val1 = 10;
  }
  if(this.state.playerHand.value  == "JACK"){
    val1 = 10;
  }
  if(this.state.playerHand.value  == "QUEEN"){
    val1 = 10;
  }
  if(this.state.playerHand.value  == "KING"){
    val1 = 10;
  }
  if(this.state.playerHand.value  == "ACE"){
    val1 = 11;
  }

  //update count
  var image1array = [this.state.playerHand.image1];

  this.setState({
    playerCount: (this.state.playerCount + val1),
    playerImages: this.state.playerImages.concat(image1array),
    })

  if(this.state.playerCount > 21){
      this.setState({
        winText: "You Lose :(",
        computerHiddenImages: this.state.computerImages,
        computerHiddenCount: this.state.computerCount,
      })
  }

  if(this.state.playerCount == 21){
    this.setState({
      winText: "YOU WIN!!!",
      computerHiddenImages: this.state.computerImages,
      computerHiddenCount: this.state.computerCount,
    })
  }
}

async hitHandeler(){
if(this.state.winText != "You Lose :(" || this.state.winText != "YOU WIN!!!"){

this.setState({
    playerHand: await getOneCard(this.state.Deck.deck_id),
})

await this.updateCardsOne()
}
}

async holdHandeler(){
if(this.state.winText != "You Lose :(" || this.state.winText != "YOU WIN!!!"){
  if(this.state.playerCount <= this.state.computerCount){
    this.setState({
      winText: "You Lose :(",
      computerHiddenImages: this.state.computerImages,
      computerHiddenCount: this.state.computerCount,
    })
  }
  else {
    this.setState({
      winText: "YOU WIN!!!",
      computerHiddenImages: this.state.computerImages,
      computerHiddenCount: this.state.computerCount,
    })
  }
}  
}


render() {

return (
<ImageBackground source= {require('../assets/BlackJackBackground.jpg')} style= {styles.container}>
 <View>
     <Text style = {styles.TitleText}>BlackJack</Text>
    <Button color="red" title="Start a new game" onPress={this.startGameDeck.bind(this)}/>

     <Text style={styles.WinText}>
         {this.state.winText}
     </Text>

     <Text style={styles.QuoteText}>
     Computer Hand       Total: {this.state.computerHiddenCount} 
     </Text>
     <View style={{flexDirection: "row", alignItems: 'flex-start', height:100}} >
     <Image style={styles.Pic}
         source={{uri: this.state.computerHiddenImages[0]}}
     />
     <Image style={styles.Pic}
         source={{uri: this.state.computerHiddenImages[1]}}
     />
     </View>
     

    <Text style={styles.QuoteText}>
      Your Hand       Total: {this.state.playerCount} 
      </Text>
    <View style={{flexDirection: "row", alignItems: 'flex-start', height:50}}>
       <Image style={styles.Pic}
         source={{uri: this.state.playerImages[0]}}
      />
       <Image style={styles.Pic}
         source={{uri: this.state.playerImages[1]}}
    />
       <Image style={styles.Pic}
         source={{uri: this.state.playerImages[2]}}
    />
       <Image style={styles.Pic}
         source={{uri: this.state.playerImages[3]}}
    />
       <Image style={styles.Pic}
         source={{uri: this.state.playerImages[4]}}
    />
       <Image style={styles.Pic}
         source={{uri: this.state.playerImages[5]}}
    />
    </View>

    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
  <Button color="red" title="Hit" onPress={this.hitHandeler.bind(this)}/>

  <Button color="red" title="Hold" onPress={this.holdHandeler.bind(this)}/>


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

  WinText:{
    textAlign: 'center',
    fontSize: 40,
    borderRadius: 20,
    color: "white"
  },

  Pic:{
    height: 100,
     width: 70,
  },
});