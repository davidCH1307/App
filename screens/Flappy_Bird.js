import React, { Component } from 'react';
import { StyleSheet,Text, View,StatusBar,Alert, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Constants from '../components/Constants';
//import { BorderlessButton } from 'react-native-gesture-handler';

// export default function Flappy(){
//     return (
//         <ImageBackground source= {require('../assets/Flappy.png')} style = {styles.container}>
//             <Text style = {styles.Item2}>Flappy Bird Game Coming Soon</Text>
//         </ImageBackground>
//     )
// }


export default class Flappy extends Component{
    constructor (props){
        super (props);
    }

    render (){
        return (
            <ImageBackground source= {require('../assets/Flappy.png')} style = {styles.container}>
                <Text style = {styles.Item2}>Flappy Bird Game Coming Soon</Text>
            </ImageBackground>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
    },
    Item2:{
        textAlign: 'center',
        fontSize: 20,
    }
});


