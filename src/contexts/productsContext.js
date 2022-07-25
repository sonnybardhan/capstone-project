import { createContext, useState } from 'react';
import PRODUCT_DATA from '../shop-data.json';

export const ProductsContext = createContext({});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCT_DATA);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
