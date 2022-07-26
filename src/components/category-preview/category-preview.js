import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className='category-preview-container'>
      <h2>
        <span style={{ cursor: 'pointer' }} onClick={handleClick}>
          {title.toUpperCase()}
        </span>
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
