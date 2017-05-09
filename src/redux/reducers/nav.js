const nav = (state = [], action) => {
    switch(action.type) {
        case 'PUSH_STATE':
            return state;
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id === action.id);
        default:
            return state;
    }
};

export default nav;