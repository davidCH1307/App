import React from 'react';
import { StyleSheet,Text, View, Button, ImageBackground, Image } from 'react-native';
import getQuote from '../util/RandomQuoteApi';

export default class Quarantine_Time extends React.Component{

  constructor() {
    super();
      this.state = {
        loading: true,
        quoteMeta: {},
        show: "none"
    };
  }

  async handleClick() {  
    this.setState({
      quoteMeta: await getQuote(),
      show: "flex"
    })
  }

  randomImage() {
    var index = Math.round(Math.random() * 5) + 1;

    if(index === 1){
      return require('../assets/kanyePic1.png')
    }

    else if(index === 2){
      return require('../assets/kanyePic2.png')
    }

    else if(index === 3){
      return require('../assets/kanyePic3.png')
    }

    else if(index === 4){
      return require('../assets/kanyePic4.jpg')
    }

    else if(index === 5){
      return require('../assets/kanyePic5.jpg')
    }

    else if(index === 6){
      return require('../assets/KanyePic6.jpg')
    }
  }

  render() {
  return (
    <ImageBackground source= {require('../assets/KanyeWorldBackground.jpg')} style= {styles.container}>

    <View style={{justifyContent: 'center', alignItems: 'center',}}>
      <Text style = {styles.TitleText}>Welcome to Kanye's World</Text>
      <Text></Text>
      <Button title="Get a random quote from Kanye" onPress={this.handleClick.bind(this)}/>
      <Text></Text>
      <Text style={styles.QuoteText}>
        {this.state.quoteMeta.quote}
      </Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Image  source= {this.randomImage()} style= {{height: 100, width: 100, display: this.state.show}}>
      </Image>
      
    </View>

    </ImageBackground>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  TitleText:{
    textAlign: 'center',
    fontSize: 36,
    color: "white"
  },

  QuoteText:{
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 20,
    color: "white"
  },

  Pic:{
    height: 100,
     width: 100,
     display: "none"
  },
});