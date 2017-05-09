import {TabNavigator} from 'react-navigation';
import HomeNavigator from './home-navigator';
import Settings from './../containers/settings';

export default TabNavigator({
    Home: {
        screen: HomeNavigator
    },
    Settings: {
        screen: Settings
    }
});