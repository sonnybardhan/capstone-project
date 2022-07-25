import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems, toggleCartIsOpen } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button
        onClick={() => {
          toggleCartIsOpen();
          navigate('checkout');
        }}
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
