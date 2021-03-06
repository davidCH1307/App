import React from 'react';
import { StyleSheet,Text, View, Button, ImageBackground} from 'react-native';

export default function NEWSCREEN({ navigation }){

    const pressHandler = () => {
        navigation.navigate('Kanye_World');
    }

    const pressHandler2 = () => {
        navigation.navigate('Rock_Paper_Scissor');
    }

    const pressHandler3 = () => {
        navigation.navigate('Stay_On_Task');
    }

    const pressHandler4 = () => {
        navigation.navigate('Flappy_Bona');
    }

    const pressHandler5 = () => {
        navigation.navigate('BlackJack');
    }
    const pressHandler6 = () => {
        navigation.navigate('BigBangGame');
    }

    return (
        <ImageBackground source = {require('../assets/blue.jpg')} style = {styles.container}>
            <Text style = {styles.writings}>Welcome to the Quarantine App</Text>
            <Button title = 'Stay On Task' onPress = {pressHandler3}/>
            <Button title = 'Rock Paper Scissor ' onPress = {pressHandler2}/>
            <Button title = 'Rock Paper Scissor Lizard Spock ' onPress = {pressHandler6}/>
            <Button title = 'Flappy Bona' onPress = {pressHandler4}/>
            <Button title = 'Welcome to Kanye World ' onPress = {pressHandler}/>
            <Button title = 'BlackJack' onPress = {pressHandler5}/>
            <Button title = "About" onPress = {() => alert ("This app was made by:                               David, Matt, Nikolas")}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
    },
    writings: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'skyblue',
    }
});