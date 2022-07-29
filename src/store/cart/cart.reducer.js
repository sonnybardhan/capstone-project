import { CART_ACTION_TYPES } from './cart.types';

const INITIAL_CART_STATE = {
  cartItems: [],
  cartIsOpen: false,
  totalCartItems: 0,
  totalCartAmount: 0,
};

export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.SET_CART_IS_OPEN:
      return { ...state, cartIsOpen: !state.cartIsOpen };
    case CART_ACTION_TYPES.SET_TOTAL_CART_ITEMS:
      return { ...state, totalCartItems: payload };
    case CART_ACTION_TYPES.SET_TOTAL_AMOUNT:
      return { ...state, totalCartAmount: payload };
    default:
      return state;
  }
};
