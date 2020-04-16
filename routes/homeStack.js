import React from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Kanye_World from '../screens/Kanye_World';
import Menu from '../screens/Menu';
import NewScreen from '../screens/NewScreen';
import Stay_On_Task from '../screens/Stay_On_Task';
import Flappy_Bona from '../screens/Flappy_Bona'
import Reviews from '../screens/reviews';

const screens = {
    Menu: {
        screen: Menu,
    },
    Stay_On_Task: {
        screen: Stay_On_Task
    },
    Reviews: {
        screen: Reviews
    },
    NewScreen: {
        screen: NewScreen
    },
    Flappy_Bona: {
        screen: Flappy_Bona
    },
    Kanye_World: {
        screen: Kanye_World
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
