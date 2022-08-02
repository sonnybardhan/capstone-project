import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner';
import CategoryPreview from '../../components/category-preview/category-preview';
import {
  selectCategoriesIsLoading,
  selectCategory,
} from '../../store/categories/categories.selector';
import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategory);
  const isLoading = useSelector(selectCategoriesIsLoading);
  console.log('isLoading: ', isLoading);
  return (
    <div className='categories-container'>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.entries(categories).map(([category, products]) => {
          return (
            <CategoryPreview
              key={category}
              title={category}
              products={products}
            />
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
