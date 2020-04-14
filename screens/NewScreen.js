import React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';

export default function NEWSCREEN(){
    return (
        <View style = {styles.container}>
            <Text>NEW SCREEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
});