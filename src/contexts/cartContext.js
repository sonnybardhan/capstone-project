import { useEffect } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { createAction } from '../utils/reducer.utils';

export const CartContext = createContext({});

const cartActions = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_IS_OPEN: 'SET_CART_IS_OPEN',
  SET_TOTAL_CART_ITEMS: 'SET_TOTAL_CART_ITEMS',
  SET_TOTAL_AMOUNT: 'SET_TOTAL_AMOUNT',
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

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART_ITEMS':
      return { ...state, cartItems: action.payload };
    case 'SET_CART_IS_OPEN':
      return { ...state, cartIsOpen: !state.cartIsOpen };
    case 'SET_TOTAL_CART_ITEMS':
      return { ...state, totalCartItems: action.payload };
    case 'SET_TOTAL_AMOUNT':
      return { ...state, totalCartAmount: action.payload };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const INITIAL_STATE = {
  cartItems: [],
  cartIsOpen: false,
  totalCartItems: 0,
  totalCartAmount: 0,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartItems, cartIsOpen, totalCartItems, totalCartAmount } = state;

  const toggleCartIsOpen = () => {
    dispatch(createAction(cartActions.SET_CART_IS_OPEN));
  };

  const addItemToCart = (productToAdd) => {
    dispatch(
      createAction(
        cartActions.SET_CART_ITEMS,
        addToCart(cartItems, productToAdd)
      )
    );
  };

  const getCartItemCount = () => {
    dispatch(
      createAction(
        cartActions.SET_TOTAL_CART_ITEMS,
        cartItems.reduce(
          (total, currentItem) => total + currentItem.quantity,
          0
        )
      )
    );
  };

  const calculateTotal = () => {
    dispatch(
      createAction(
        cartActions.SET_TOTAL_AMOUNT,
        cartItems.reduce(
          (total, { quantity, price }) => total + quantity * price,
          0
        )
      )
    );
  };

  useEffect(() => {
    getCartItemCount();
    calculateTotal();
  }, [cartItems]);

  const decrementQuantity = (id) => {
    const updatedCartItems = [...cartItems];
    const productIdx = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === id
    );
    if (updatedCartItems[productIdx].quantity > 1) {
      updatedCartItems[productIdx].quantity -= 1;
      dispatch(createAction(cartActions.SET_CART_ITEMS, updatedCartItems));
    } else {
      removeProduct(id);
    }
  };

  const removeProduct = (id) => {
    dispatch(
      createAction(
        cartActions.SET_CART_ITEMS,
        cartItems.filter((item) => item.id !== id)
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        cartIsOpen,
        totalCartItems,
        totalCartAmount,
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
