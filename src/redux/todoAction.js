import { ADD_TODO, DELETE_ALL, REMOVE_TODO } from "./todoTypes";
export const saveTodo = (input) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      data: input,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};
