import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCartIsOpen = () => {
    return setCartIsOpen((previousState) => !previousState);
  };

  return (
    <CartContext.Provider
      value={{ items, setItems, cartIsOpen, toggleCartIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
