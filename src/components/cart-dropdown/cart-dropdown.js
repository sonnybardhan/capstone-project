import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import Button from '../button/button';
import './cart-dropdown.styles.scss';

// const cartItems = [
//   {
//     id: 1,
//     name: 'Brown Brim',
//     imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//     price: 25,
//   },
//   {
//     id: 2,
//     name: 'Blue Beanie',
//     imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
//     price: 18,
//   },
// ];

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
