import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.styles.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './contexts/userContext';
import { ProductsContextProvider } from './contexts/productsContext';
import { CartContextProvider } from './contexts/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
