
// for testing purposes we create a fake id on todo item creation:
let todoIndex = 0;

const todo = (state, action) => {
  switch (action.type) {
      case 'ADD_TODO':
          todoIndex = todoIndex + 1;
          return {
            id: todoIndex,
            title: action.title,
          };
      case 'TOGGLE_TODO':
          if (state.id !== action.id) {
            return state;
          }
          return {
              ...state,
              done: !state.done
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
        case 'TOGGLE_TODO':
            return state.map((t) => {
                return todo(t, action);
            });
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

export default todos;