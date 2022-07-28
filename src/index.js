import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.styles.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CartContextProvider } from './contexts/cartContext';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
