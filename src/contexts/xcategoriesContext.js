import { createContext, useEffect, useReducer } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase';
import { createAction } from '../utils/reducer.utils';

export const CategoriesContext = createContext({});

const categoriesActions = {
  SET_CATEGORIES: 'SET_CATEGORIES',
};

const categoriesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const INITIAL_CATEGORIES_STATE = {
  categories: {},
};

export const CategoriesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_CATEGORIES_STATE
  );

  const { categories } = state;

  const getCategories = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    dispatch(createAction(categoriesActions.SET_CATEGORIES, categoryMap));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;