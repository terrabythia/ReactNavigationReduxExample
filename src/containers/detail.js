import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

import Detail from './../components/detail';

// How to calculate props for <Home />
// based on the current state of the store?
const mapStateToProps = (state) => ({
    todos: state.todos
});

const Container = connect(mapStateToProps)(Detail);

export default class extends React.Component {

    static navigationOptions = {
        title: 'Create a new todo item',
    };

    render() {
        return <Provider store={store}>
            <Container {...this.props} />
        </Provider>;
    }

}

