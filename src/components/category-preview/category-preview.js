import React from 'react';
import ProductCard from '../product-card/product-card';
import {
  CategoryPreviewContainer,
  PreviewContainer,
  TitleLink,
} from './category-preview.styles.js';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={`/shop/${title}`}>{title.toUpperCase()}</TitleLink>
      </h2>
      <PreviewContainer>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
