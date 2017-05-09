export const addTodo = (title) => {
    return {
        type: 'ADD_TODO',
        title
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    };
};