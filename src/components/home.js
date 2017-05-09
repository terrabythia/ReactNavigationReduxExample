import React from 'react';
import {View, Text, Switch, Button} from 'react-native';
import {toggleTodo, removeTodo} from './../redux/actions/todos';

export default class Home extends React.Component {

    _toggleTodo = (todo) => {
        this.props.dispatch(
            toggleTodo(todo.id)
        );
    };

    _removeTodo = (todo) => {
        this.props.dispatch(
            removeTodo(todo.id)
        );
    };

    render() {

        return (
            <View style={{alignItems: 'center', padding: 20}}>
                {this.props.todos.map((todo) => {
                    return (
                        <View key={todo.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{flex: 1, color: (todo.done ? '#888888': '#000000')}}>
                                {todo.title}
                            </Text>
                            <View style={{flex: 0, flexDirection: 'row'}}>
                                <Switch style={{flex: 0}}
                                        onValueChange={() => this._toggleTodo(todo)}
                                        value={todo.done} />
                                <Button title="delete" onPress={() => this._removeTodo(todo)} />
                            </View>

                        </View>
                    );
                })}
                <Button
                    onPress={() => this.props.navigation.navigate('Detail', {})}
                    title="Add a todo" />
            </View>
        );

    }

}
