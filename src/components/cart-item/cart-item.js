import React from 'react';
import {
  CartItemContainer,
  Img,
  ItemDetails,
  NameContainer,
} from './cart-item.styles';
// import './cart-item.styles.js';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <NameContainer>{name}</NameContainer>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
