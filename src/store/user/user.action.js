import { createAction } from '../../utils/reducer.utils';
import { userActions } from './user.types';

export const setUser = (user) => createAction(userActions.SET_USER, user);
