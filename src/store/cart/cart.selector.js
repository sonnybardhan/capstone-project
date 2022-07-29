export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemCount = (state) => {
  return state.cart.cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );
};

export const selectCartTotal = (state) => {
  return state.cart.cartItems.reduce(
    (total, { quantity, price }) => total + quantity * price,
    0
  );
};

export const selectCartIsOpen = (state) => state.cart.cartIsOpen;
