import { createAction } from '../../utils/reducer.utils';
import { CATEGORIES_ACTIONS_TYPES } from './category.types';

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categories);
