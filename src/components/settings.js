import React from 'react';
import {View, Text} from 'react-native';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

class Settings extends React.Component {

    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>In details! {this.props.todos.length}</Text>
            </View>
        );

    }

}

// How to calculate props for <Home />
// based on the current state of the store?
const mapStateToProps = (state) => ({
    todos: state.todos
});

Settings = connect(mapStateToProps)(Settings);

export default class extends React.Component {

    render() {
        return <Provider store={store}>
            <Settings {...this.props} />
        </Provider>;
    }

}

