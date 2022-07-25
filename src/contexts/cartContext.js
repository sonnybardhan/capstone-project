import { createContext, useState } from 'react';

export const CartContext = createContext({});

const addToCart = (cartItems, productToAdd) => {
  // setCartItemCount((previousCount) => previousCount + 1);

  if (!cartItems.length) {
    return [{ ...productToAdd, quantity: 1 }];
  }
  const updatedCartItems = [...cartItems];

  const productIdx = updatedCartItems.findIndex(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (productIdx >= 0) {
    updatedCartItems[productIdx].quantity += 1;
  } else {
    updatedCartItems.push({ ...productToAdd, quantity: 1 });
  }

  return updatedCartItems;
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCartIsOpen = () => {
    return setCartIsOpen((previousState) => !previousState);
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addToCart(cartItems, productToAdd));
  };

  const getCartItemCount = () => {
    return cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        cartIsOpen,
        toggleCartIsOpen,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
