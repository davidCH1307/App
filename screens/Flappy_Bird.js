import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar, Alert, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Constants from '../components/Constants';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import Physics, { resetPipes } from '../components/Physics';

export default class Flappy extends Component{
    constructor (props){
        super (props);
        this.gameEngine = null;
        this.entities = this.setupWorld();

        this.state = {
            running: true,
            score: 0,
        }

    }

    setupWorld = () => {
        let engine = Matter.Engine.create({ enableSleeping: false });
        let world = engine.world;
        world.gravity.y = 0.0;

        let bird = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT/ 2, Constants.BIRD_WIDTH,Constants.BRID_HEIGHT);
        
        let floor1 = Matter.Bodies.rectangle(
                Constants.MAX_WIDTH /2, 
                Constants.MAX_HEIGHT - 110, 
                Constants.MAX_WIDTH + 4, 
                50, 
                { isStatic: true }
                );

        let floor2 = Matter.Bodies.rectangle(
                Constants.MAX_WIDTH + (Constants.MAX_WIDTH /2), 
                Constants.MAX_HEIGHT - 110, 
                Constants.MAX_WIDTH + 4, 
                50, 
                { isStatic: true }
                );
    
        Matter.World.add(world, [bird, floor1, floor2]);
        Matter.Events.on(engine, "collisionStart", (event) => {
            var pairs = event.pairs;

            this.gameEngine.dispatch({ type: "game-over"});
        });

        return {
            physics: {engine: engine, world: world },
            bird: {body: bird, pose: 1, renderer: Bird },
            floor1: {body: floor1, renderer: Floor },
            floor2: {body: floor2, renderer: Floor },
            
        }
    } 

    onEvent = (e) => {
        if (e.type === "game-over"){
            this.setState({
                running: false
            });
        }else if (e.type === 'score'){
            this.setState({
                score: this.state.score + 1
            })
        }
    }

    reset = () => {
        resetPipes();
        this.gameEngine.swap(this.setupWorld());
        this.setState({
            running: true,
            score: 0
        });
    }

 
    render (){
        return (
            <ImageBackground source = {(require('../assets/Bonaventurebasketball.jpg'))} style = {styles.container}>
                <GameEngine
                    ref = {(ref) => {this.gameEngine = ref; }}
                    style = {styles.gameContainer}
                    systems = {[Physics]}
                    running = {this.state.running}
                    onEvent = {this.onEvent}
                    entities = {this.entities} >
                        <StatusBar hidden = {true} />
                    </GameEngine>
                    <Text style = {styles.scoreCounter}>{this.state.score}</Text>
                    {!this.state.running &&
                    <TouchableOpacity onPress={this.reset} style={styles.fullScreenButton}>
                        <View style = {styles.fulLScreen}>
                            <Text style = {styles.gameOverText}> Game Over </Text>
                            <Text style = {styles.gameOverSubText}> Try Again </Text>
                            <Text style = {styles.scoreCounter}>{this.state.score}</Text>
                        </View>
                    </TouchableOpacity>}
            </ImageBackground>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }, 
    gameContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    fullScreenButton: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
    },
    fulLScreen:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameOverText:{
        color: 'white',
        fontSize: 48,
    },
    gameOverSubText:{
        color: 'white',
        fontSize: 24,
    },
    scoreCounter: {
        position: 'absolute',
        color: 'white',
        fontSize: 72,
        top: 50,
        left: Constants.MAX_WIDTH /2 - 24,
        textShadowColor: '#444444',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
});


