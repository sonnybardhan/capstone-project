import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import './shop.styles.scss';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import { useEffect } from 'react';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  const getCategories = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    dispatch(setCategories(categoryMap));
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
