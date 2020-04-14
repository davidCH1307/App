import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Kanye_World from '../screens/Kanye_World';
import Menu from '../screens/Menu';
import NewScreen from '../screens/NewScreen';

const screens = {
    Menu: {
        screen: Menu
    },
    Kanye_World: {
        screen: Kanye_World
    },
    NewScreen: {
        screen: NewScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);