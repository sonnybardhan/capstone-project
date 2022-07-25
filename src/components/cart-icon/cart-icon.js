import React, { useContext } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cartContext';

const CartIcon = () => {
  const { toggleCartIsOpen, getCartItemCount } = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={toggleCartIsOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{getCartItemCount()}</span>
    </div>
  );
};

export default CartIcon;
