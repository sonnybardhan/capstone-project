import { useReducer } from 'react';
import { createContext, useEffect } from 'react';
import { setCurrentUser } from '../store/users/user.action';
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from '../utils/firebase';
import { createAction } from '../utils/reducer.utils';

export const UserContext = createContext({});

const userActions = {
  SET_USER: 'SET_USER',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const INITIAL_USER_STATE = {
  user: null,
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);
  const { user } = state;

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (!user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
