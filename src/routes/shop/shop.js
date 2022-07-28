import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { CATEGORIES_ACTION_TYPES } from '../../store/categories/categories.types';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import { createAction } from '../../utils/reducer.utils';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  const getCategories = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    dispatch(createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoryMap));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
