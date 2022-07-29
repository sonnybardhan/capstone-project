import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, { quantity, price }) => total + quantity * price, 0)
);

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.cartIsOpen
);
