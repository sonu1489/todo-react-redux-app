import { ADD_TODO, DELETE_ALL, REMOVE_TODO } from "./todoTypes";

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return {
      ...state,
      todoList: [
        ...state.todoList,
        {
          id: action.payload.id,
          data: action.payload.data,
        },
      ],
    };
  }
  if (action.type === REMOVE_TODO) {
    const updatedList = state.todoList.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...state,
      todoList: updatedList,
    };
  }
  if (action.type === DELETE_ALL) {
    return {
      ...state,
      todoList: [],
    };
  }
  return state;
};

export default todoReducer;
