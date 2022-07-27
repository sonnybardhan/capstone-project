import { useReducer } from 'react';
import { createContext, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from '../utils/firebase';

export const UserContext = createContext({});

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const initialUserState = {
  user: null,
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);
  const { user } = state;

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (!user) {
        createUserDocFromAuth(user);
      }
      dispatch({
        type: 'SET_USER',
        payload: user,
      });
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
