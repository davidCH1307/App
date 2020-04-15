import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

export default function Header () {
    return (
        <ImageBackground source = {require('../assets/475797_preview.png')} style = {styles.header}>
            <View>
                <Text style = {styles.headerText}>Menu</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '190%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingBottom: 35,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        letterSpacing: 1,
    },
});