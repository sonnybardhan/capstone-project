import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartIsOpen,
  selectCartItemCount,
} from '../../store/cart/cart.selector';
import { setCartIsOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  const cartIsOpen = useSelector(selectCartIsOpen);
  const totalCartItems = useSelector(selectCartItemCount);
  const dispatch = useDispatch();

  const toggleCartIsOpen = () => {
    dispatch(setCartIsOpen(cartIsOpen));
  };

  return (
    <div className='cart-icon-container' onClick={toggleCartIsOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalCartItems}</span>
    </div>
  );
};

export default CartIcon;
