import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

import Settings from './../components/settings';

// How to calculate props for <Home />
// based on the current state of the store?
const mapStateToProps = (state) => ({
    todos: state.todos
});

const Container = connect(mapStateToProps)(Settings);

export default class extends React.Component {

    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return <Provider store={store}>
            <Container {...this.props} />
        </Provider>;
    }

}

