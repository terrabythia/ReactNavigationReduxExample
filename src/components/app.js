import {TabNavigator} from 'react-navigation';
import HomeNavigator from './home-navigator';
import Settings from './settings';

import store from './../redux/store';

export default TabNavigator({
    Home: {
        screen: HomeNavigator
    },
    Settings: {
        screen: Settings
    }
});