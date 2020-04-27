import React from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Kanye_World from '../screens/Kanye_World';
import Menu from '../screens/Menu';
import RPS from '../screens/RPS';
import Stay_On_Task from '../screens/Stay_On_Task';
import Flappy_Bona from '../screens/Flappy_Bird';
import BlackJack from '../screens/BlackJack';
import BigBangGame from '../screens/BigBangGame';

const screens = {
    Menu: {
        screen: Menu,
    },
    Stay_On_Task: {
        screen: Stay_On_Task
    },
    Rock_Paper_Scissor: {
        screen: RPS
    },
    BigBangGame:{
        screen: BigBangGame
    },
    Flappy_Bona: {
        screen: Flappy_Bona
    },
    Kanye_World: {
        screen: Kanye_World
    },
    BlackJack: {
        screen: BlackJack
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
