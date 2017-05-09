import { combineReducers } from 'redux';
import nav from './nav';
import todos from './todos';
import users from './users';

export default combineReducers({
    nav,
    todos,
    users
})