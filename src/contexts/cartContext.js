import { createContext, useState } from 'react';

export const CartContext = createContext({});

const addToCart = (cartItems, productToAdd) => {
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

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, { quantity, price }) => total + quantity * price,
      0
    );
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = [...cartItems];
    const productIdx = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === id
    );

    if (updatedCartItems[productIdx].quantity > 1) {
      updatedCartItems[productIdx].quantity -= 1;
      setCartItems(updatedCartItems);
    } else {
      removeProduct(id);
    }
  };

  const removeProduct = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        cartIsOpen,
        toggleCartIsOpen,
        getCartItemCount,
        removeProduct,
        decrementQuantity,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
