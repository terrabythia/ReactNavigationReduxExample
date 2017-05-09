import {StackNavigator} from 'react-navigation';
import Home from './home';
import Detail from './detail';

export default StackNavigator({
    Home: {
        screen: Home
    },
    Detail: {
        screen: Detail
    }
});