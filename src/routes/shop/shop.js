import React, { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview';
// import ProductCard from '../../components/product-card/product-card';
import CategoriesContext from '../../contexts/categoriesContext';
import './shop.styles.scss';

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
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

export default Shop;
