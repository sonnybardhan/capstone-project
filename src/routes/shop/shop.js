import React, { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card';
// import SHOP_DATA from '../../shop-data.json';
import ProductsContext from '../../contexts/productsContext';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
