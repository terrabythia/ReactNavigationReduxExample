import {StackNavigator} from 'react-navigation';
import Home from './../containers/home';
import Detail from './../containers/detail';

export default StackNavigator({
    Home: {
        screen: Home
    },
    Detail: {
        screen: Detail
    }
});