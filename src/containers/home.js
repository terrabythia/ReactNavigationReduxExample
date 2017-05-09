import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

import Home from './../components/home';

// How to calculate props for <Home />
// based on the current state of the store?
const mapStateToProps = (state) => ({
    users: state.users,
    todos: state.todos
});

const Container = connect(mapStateToProps)(Home);

export default class extends React.Component {

    static navigationOptions = {
        title: 'Todos',
    };

    render() {
        return <Provider store={store}>
            <Container {...this.props} />
        </Provider>;
    }

}

