import { createAction } from '../../utils/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

export const setCartItems = (cartItems, productToAdd) => {
  if (!productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

  const items = addToCart(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, items);
};

export const setCartIsOpen = (isOpen) => {
  return createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, !isOpen);
};

export const removeProduct = (cartItems, id) => {
  const filteredItems = cartItems.filter((item) => item.id !== id);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, filteredItems);
};

export const decrementQuantity = (cartItems, id) => {
  const updatedCartItems = [...cartItems];
  const productIdx = updatedCartItems.findIndex(
    (cartItem) => cartItem.id === id
  );

  if (updatedCartItems[productIdx].quantity > 1) {
    updatedCartItems[productIdx].quantity -= 1;
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
  } else {
    return removeProduct(cartItems, id);
  }
};

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
