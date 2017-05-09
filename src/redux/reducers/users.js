
const user = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                id: 100,
                title: action.title,
            };
        default:
            return state;
    }
};

const users = (state = [], action) => {
    switch(action.type) {
        case 'ADD_USER':
            return [
                ...state,
                user(undefined, action)
            ];
        case 'REMOVE_USER':
            return state.filter((user) => user.id === action.id);
        default:
            return state;
    }
};

export default users;