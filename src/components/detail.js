import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { addTodo } from './../redux/actions/todos';

export default class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    _createTodo = () => {
        this.props.dispatch(
            addTodo(this.state.title)
        );
        this.props.navigation.goBack();
    };

    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', padding: 20}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Give your todo a title"
                    onChangeText={(title) => this.setState({title})}
                />
                <Button disabled={''===this.state.title}
                        title="Create"
                        onPress={this._createTodo} />
            </View>
        );

    }

}
