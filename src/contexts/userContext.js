import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from '../utils/firebase';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (!user) {
        createUserDocFromAuth(user);
      }
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
