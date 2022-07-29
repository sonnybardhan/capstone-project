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

export const setTotalCartItems = (cartItems) => {
  const count = getCartItemCount(cartItems);
  return createAction(CART_ACTION_TYPES.SET_TOTAL_CART_ITEMS, count);
};

export const setTotalCartAmount = (cartItems) => {
  const amount = calculateTotal(cartItems);
  return createAction(CART_ACTION_TYPES.SET_TOTAL_AMOUNT, amount);
};

export const removeProduct = (cartItems, id) => {
  const filteredItems = cartItems.filter((item) => item.id !== id);
  return setCartItems(filteredItems);
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

export const getCartItemCount = (cartItems) =>
  cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);

export const calculateTotal = (cartItems) =>
  cartItems.reduce((total, { quantity, price }) => total + quantity * price, 0);

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
