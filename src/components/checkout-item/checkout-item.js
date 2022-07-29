import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCartItems,
  removeProduct,
  decrementQuantity,
} from '../../store/cart/cart.action';
import { selectCart } from '../../store/cart/cart.selector';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item: cartItem }) => {
  const { cartItems } = useSelector(selectCart);

  const dispatch = useDispatch();

  const { id, imageUrl, name, price, quantity } = cartItem;

  const handleIncrement = () => {
    dispatch(setCartItems(cartItems, cartItem));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(cartItems, id));
  };
  const handleRemove = () => {
    dispatch(removeProduct(cartItems, id));
  };

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={handleDecrement} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div onClick={handleIncrement} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>${price * quantity}</span>
      <div className='remove-button' onClick={handleRemove}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
