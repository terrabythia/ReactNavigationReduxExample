
const todo = (state, action) => {
  switch (action.type) {
      case 'ADD_TODO':
          return {
            id: 100,
            title: action.title,
          };
      default:
          return state;
  }
};

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id === action.id);
        default:
            return state;
    }
};

export default todos;