import React from 'react';
import {connect} from 'react-redux';

class Container extends React.Component {

    render() {

        return React.Children.only(this.props.children);

    }

}

// How to calculate props for <Home />
// based on the current state of the store?
const mapStateToProps = (props) => {
    return  (state) => {
        let map = {};
        for (let prop of props) {
            map[prop] = state[props];
        }
        return map;
    };
};

export function createStoreContainer(mapProps) {

    return connect(mapStateToProps(mapProps))(Container);

}
