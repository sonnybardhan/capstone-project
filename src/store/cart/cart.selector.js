export const selectCart = (state) => state.cart;

/**
 selectCartItems 
 selectCartItemCount
 selectCartTotal
 selectCartIsOpen
 */

export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemCount = (state) => {
  return state.cart.cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );
  // state.cart.totalCartItems
};

export const selectCartTotal = (state) => {
  return state.cart.cartItems.reduce(
    (total, { quantity, price }) => total + quantity * price,
    0
  );
  // state.cart.totalCartAmount;
};

export const selectCartIsOpen = (state) => state.cart.cartIsOpen;
