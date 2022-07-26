import React, { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview';
import CategoriesContext from '../../contexts/categoriesContext';
import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

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
