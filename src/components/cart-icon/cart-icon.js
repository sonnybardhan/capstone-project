import React, { useContext } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cartContext';

const CartIcon = () => {
  const { items, toggleCartIsOpen } = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={toggleCartIsOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{items.length}</span>
    </div>
  );
};

export default CartIcon;
