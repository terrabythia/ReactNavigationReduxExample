import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

class Todos extends React.Component {

    render() {

        console.log(this.props);

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button onPress={() => this.props.navigation.navigate('Detail')} title="KLIK!" />
            </View>
        );

    }

}

// How to calculate props for <Home />
// based on the current state of the store?
const mapStateToProps = (state) => ({
    users: state.users,
    todos: state.todos
});

Todos = connect(mapStateToProps)(Todos);

export default class extends React.Component {

    render() {
        return <Provider store={store}>
            <Todos {...this.props} />
        </Provider>;
    }

}

