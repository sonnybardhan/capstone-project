import { userActions } from './user.types';

const INITIAL_USER_STATE = {
  user: null,
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
