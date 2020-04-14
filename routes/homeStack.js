import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Kanye_World from '../screens/Kanye_World';
import Menu from '../screens/Menu';
import NewScreen from '../screens/NewScreen';
import Stay_On_Task from '../screens/Stay_On_Task';

const screens = {
    Menu: {
        screen: Menu
    },
    Kanye_World: {
        screen: Kanye_World
    },
    Stay_On_Task: {
        screen: Stay_On_Task
    },
    NewScreen: {
        screen: NewScreen
    },

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);