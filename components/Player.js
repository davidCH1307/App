import React from "react";
import scissors from "../assets/scissors1.png";
import paper from "../assets/paper1.png";
import rock from "../assets/rock1.png";
import {View, Image, StyleSheet,Dimensions} from "react-native";
const Player = ({ weapon }) => (
  <>
    <View className="player">
      <Image style={styles.RPS}
        className="player-image"
        source={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors" 
         resizeMode ="contain" crop= "scale"
         width= {Dimensions.get("screen").width/1.5}
     height= {Dimensions.get("screen").height/4}
     flexDirection= "verticle"
          
      />
    </View>
  </>
);
const styles = StyleSheet.create({ 
  RPS:{
    alignItems:"center", justifyContent:"center" ,
    top: 1, bottom: 1, left: 1, right: 1, flexDirection: "row", 
     marginTop: -200, position:"relative", 
  }
 })

export default Player;

