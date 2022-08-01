import React from 'react';
import './cart-icon.styles.js';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartIsOpen,
  selectCartItemCount,
} from '../../store/cart/cart.selector';
import { setCartIsOpen } from '../../store/cart/cart.action';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconBtn,
} from './cart-icon.styles.js';

const CartIcon = () => {
  const cartIsOpen = useSelector(selectCartIsOpen);
  const totalCartItems = useSelector(selectCartItemCount);
  const dispatch = useDispatch();

  const toggleCartIsOpen = () => {
    dispatch(setCartIsOpen(!cartIsOpen));
  };

  return (
    <CartIconContainer onClick={toggleCartIsOpen}>
      {/* <ShoppingIcon className='shopping-icon' /> */}
      <ShoppingIconBtn />
      <ItemCount>{totalCartItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
