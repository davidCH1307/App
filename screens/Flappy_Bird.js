import React, { Component } from 'react';
import { StyleSheet,Text, View,StatusBar,Alert, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Constants from '../components/Constants';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';
import Bird from '../components/Bird';


export default class Flappy extends Component{
    constructor (props){
        super (props);
        this.gameEngine = null;
        this.entities = this.setupWorld();
    }

    setupWorld = () => {
        let engine = Matter.Engine.create({ enableSleeping: false });
        let world = engine.world;

        let bird = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 4, Constants.MAX_HEIGHT/ 2, 50,50);

        Matter.World.add(world, [bird]);

        return {
            physics: {engine: engine, world: world },
            bird: {body: bird, size: [50,50], color: 'red', render: Bird }
        }
    } 

    render (){
        return (
            <View style = {styles.container}>
                <GameEngine
                    ref = {(ref) => {this.gameEngine = ref; }}
                    style = {styles.gameContainer}
                    entities = {this.entities} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});








//import { BorderlessButton } from 'react-native-gesture-handler';

// export default function Flappy(){
//     return (
//         <ImageBackground source= {require('../assets/Flappy.png')} style = {styles.container}>
//             <Text style = {styles.Item2}>Flappy Bird Game Coming Soon</Text>
//         </ImageBackground>
//     )
// }


