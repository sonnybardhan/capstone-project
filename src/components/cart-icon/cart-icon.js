import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/cart.selector';
import { getCartItemCount, setCartIsOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  const { cartItems, totalCartItems, cartIsOpen } = useSelector(selectCart);
  const dispatch = useDispatch();

  const toggleCartIsOpen = () => {
    dispatch(setCartIsOpen(cartIsOpen));
  };

  return (
    <div className='cart-icon-container' onClick={toggleCartIsOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{getCartItemCount(cartItems)}</span>
    </div>
  );
};

export default CartIcon;
