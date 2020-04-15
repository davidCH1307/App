import React from 'react';
import { StyleSheet,Text, View, Button, ImageBackground} from 'react-native';

export default function NEWSCREEN({ navigation }){

    const pressHandler = () => {
        navigation.navigate('Kanye_World');
    }

    const pressHandler2 = () => {
        navigation.navigate('NewScreen');
    }

    const pressHandler3 = () => {
        navigation.navigate('Stay_On_Task');
    }

    const pressHandler4 = () => {
        navigation.navigate('Flappy_Bird');
    }
    const pressHandler5 = () => {
        navigation.navigate('Reviews')
    }

    return (
        <ImageBackground source = {require('../assets/475797_preview.png')} style = {styles.container}>
            <Text style = {styles.writings}>Welcome to the Quarantine App</Text>
            <Button title = 'Stay On Task' onPress = {pressHandler3}/>
            <Button title = 'Review' onPress = {pressHandler5}/>
            <Button title = 'New Page ' onPress = {pressHandler2}/>
            <Button title = 'Flappy Bird' onPress = {pressHandler4}/>
            <Button title = 'Welcome to Kanye World ' onPress = {pressHandler}/>
            <Button title = "About" onPress = {() => alert ("This app was made by:                               David, Matt, Nikolas, Justin ")}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'beige',
    },
    writings: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
});