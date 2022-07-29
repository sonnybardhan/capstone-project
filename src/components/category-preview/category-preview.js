import React from 'react';
import { Link } from 'react-router-dom';
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card';

const CategoryPreview = ({ title, products }) => {
  console.log(title, products);
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={`/shop/${title}`} className='title'>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
