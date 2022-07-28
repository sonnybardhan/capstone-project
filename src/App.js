import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
import { useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from './utils/firebase';

import { setUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (!user) {
        createUserDocFromAuth(user);
      }
      dispatch(setUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
