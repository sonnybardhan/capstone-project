import React from 'react';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartIsOpen,
  selectCartItems,
} from '../../store/cart/cart.selector';
import { setCartIsOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartIsOpen = useSelector(selectCartIsOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setCartIsOpen(!cartIsOpen));
    navigate('checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length
          ? cartItems.map((item) => {
              return <CartItem key={item.id} cartItem={item} />;
            })
          : 'Your cart is empty'}
      </div>
      <Button onClick={handleClick}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
