import React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';

export default function ReviewPage(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.Item2}>Page is being worked on, Review app will be here shortly</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'beige',
    },
    Item2:{
        textAlign: 'center',
    }
});