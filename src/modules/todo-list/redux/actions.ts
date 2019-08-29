import { actionConsts } from './actionConsts';

export const todoListActions = {
  add: (payload: {}) => ({
    payload,
    type: actionConsts.todo.add,
  }),
};
