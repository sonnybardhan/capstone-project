import React from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview';
import { selectCategory } from '../../store/categories/category.selector';
import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategory);
  // const categories = useSelector((state) => state.categories.categories);
  // console.log('categories: ', categories);
  return (
    <div className='categories-container'>
      {Object.entries(categories).map(([category, products]) => {
        return (
          <CategoryPreview
            key={category}
            title={category}
            products={products}
          />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
