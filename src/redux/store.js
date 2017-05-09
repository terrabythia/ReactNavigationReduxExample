import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducers'
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const enhancer = compose(
    applyMiddleware(
        loggerMiddleware
    )
);

export default createStore(reducer, {}, enhancer);