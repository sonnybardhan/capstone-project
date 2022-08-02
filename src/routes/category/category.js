import React, { useEffect, useState } from 'react';
// import './category.styles.scss';
import { CategoryContainer, CategoryTitle } from './category.styles.js';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card';
import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategory,
} from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner';

const Category = () => {
  const categories = useSelector(selectCategory);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
