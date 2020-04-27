import React, { Component } from "react";
import { StyleSheet,Text, View, Button, Image, ImageBackground, Dimensions} from 'react-native';
import Player from "../components/Player";
import Images from "../assets/Images";



const weapons = ["rock", "paper", "scissors", "lizard","spock"];
export default class App extends React.Component{
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
    
  };

 
 

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return (<Text style={styles.Tie}>Oops it's a Tie!</Text>);
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock") ||
      (playerOne === "lizard" && playerTwo==="paper") ||
      (playerOne === "paper" && playerTwo==="spock") ||
      (playerOne === "spock" && playerTwo==="rock") ||
      (playerOne === "lizard" && playerTwo==="spock") ||
      (playerOne === "spock" && playerTwo==="scissors") ||
      (playerOne === "scissors" && playerTwo==="lizard")
    ) {
      return (<Text style={styles.playOne}>Player One Wins!</Text>);
    } else {
      return (<Text style={styles.playTwo}>Player Two Wins!</Text>);
    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };
 
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    let image= Images ["Paper"]
       let image1= Images ["Scissors"]
       let image2= Images ["Rock"]
       let image3= Images ["Lizard"]
       let image4= Images ["Spock"]
    return (
      <>
      
          <ImageBackground source= {require('../assets/stadium.jpg')} style= {styles.Background} style= {styles.Buttons} >
          <View style= {styles.playerOption}>
          
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </View>

          <Button  
            className="weaponBtn"
            onPress={() => this.selectWeapon("rock")}
            title= "Rock"
             > 
              <Image style= {styles.Rock} >
              {source= 'image2'}
              </Image>

             </Button>  
          
          <Button
            className="weaponBtn"
            onPress={() => this.selectWeapon("paper")}
            title="Paper"
          >
           <Image  style= {styles.Paper} >
              {source= 'image'}
              </Image>
          </Button>
          
          <Button
            className="weaponBtn"
            onPress={() => this.selectWeapon("scissors")}
            title="Scissors"
          >
           <Image style= {styles.Scissors} >
              {source= 'image1'}
              </Image>
          </Button>

          <Button
            className="weaponBtn"
            onPress={() => this.selectWeapon("lizard")}
            title="Lizard"
          >
           <Image  style= {styles.Lizard} >
              {source= 'image3'}
              </Image>
          </Button>

          <Button
            className="weaponBtn"
            onPress={() => this.selectWeapon("spock")}
            title="Spock"
          >
           <Image  style= {styles.Spock} >
              {source= 'image4'}
              </Image>
          </Button>


          <Button type="button" onPress={this.startGame}
        title="Start!">
          
        
        </Button>
        <View className="winner" style= {styles.Winner}>{winner ? this.selectWinner() : null}
        </View>
        </ImageBackground>
        {/* </View> */}

        
        
      </>
       
    );  
    
    
  } 
  
}
const styles= StyleSheet.create({
  playerOption:{
    
    
    top: 0, bottom: 0, left: 0, right: 0, position: "absolute",
    flexDirection: "column",  justifyContent: "space-evenly", alignItems: "center", margin: -100, 
    marginBottom: -300
  },
  Tie:{
    fontSize: 45, color: "white", textAlign:"center"
  },
  playOne:{
    fontSize: 45, color: "white", textAlign:"center"
  },
  playTwo:{
    fontSize: 45, color: "white", textAlign:"center"
  },
  Rock:{
    height: -100
  },
  Paper:{
    height: -100 
  },
  Scissors:{
    height: -100 
  },
  Lizard:{
    height: -100 
  },
  Spock:{
    height: -100 
  },
  Buttons:{
    alignItems: "stretch", justifyContent: "center", height: 810  
  },
  Background:{
    flex: 1
  }
 
  

})