import React from 'react';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.styles.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartIsOpen,
  selectCartItems,
} from '../../store/cart/cart.selector';
import { setCartIsOpen } from '../../store/cart/cart.action';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from './cart-dropdown.styles.js';

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
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <Button onClick={handleClick}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
