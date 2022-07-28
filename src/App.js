import { Routes, Route } from 'react-router-dom';
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
import { createAction } from './utils/reducer.utils';
import { USER_ACTION_TYPES } from './store/users/user.types';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (!user) {
        createUserDocFromAuth(user);
      }
      dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
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
