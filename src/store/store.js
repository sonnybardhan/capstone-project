import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const myLogger = (store) => (next) => (action) => {
  const { type, payload } = action;
  if (!action.type) return next(action);

  console.log('type: ', type);
  console.log('action: ', action);
  console.log('payload: ', payload);
  console.log('prev state: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

// const middleware = [logger];
const middleware = [myLogger];
// const middleware = [];

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancers);
