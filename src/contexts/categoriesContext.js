import { createContext, useEffect, useReducer } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase';

export const CategoriesContext = createContext({});

const categoriesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const intitialCategoriesState = {
  categories: {},
};

export const CategoriesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    categoriesReducer,
    intitialCategoriesState
  );

  const { categories } = state;

  const getCategories = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    dispatch({
      type: 'SET_CATEGORIES',
      payload: categoryMap,
    });
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
