import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Quarantine_Time from '../screens/Quarantine_Time';
import NewScreen from '../screens/NewScreen';

const screens = {
    Quarantine_Time: {
        screen: Quarantine_Time
    },
    NewScreen: {
        screen: NewScreen
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);