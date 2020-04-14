import React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function Flappy(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.Item2}>Flappy Bird</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'beige',
        backgroundImage:`url(https://www.desktopbackground.org/download/2304x864/2014/07/26/799254_flappy-generator-plus-create-your-own-flappy-bird-game_9600x950_h.png)` 
    },
    Item2:{
        textAlign: 'center',
        fontSize: 36,
    }
});