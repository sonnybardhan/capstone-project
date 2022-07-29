import React, { useEffect, useState } from 'react';
import './category.styles.scss';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card';
import { useSelector } from 'react-redux';
import { selectCategory } from '../../store/categories/categories.selector';

const Category = () => {
  const categories = useSelector(selectCategory);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      {products !== undefined ? (
        <div className='category-container'>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <h3 className='category-products-loading'>loading ... </h3>
      )}
    </>
  );
};

export default Category;
