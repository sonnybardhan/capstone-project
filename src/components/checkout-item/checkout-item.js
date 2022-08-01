import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCartItems,
  removeProduct,
  decrementQuantity,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  ArrowDiv,
  CheckoutItemContainer,
  ImageContainer,
  NameSpan,
  PriceSpan,
  QuantitySpan,
  RemoveBtnContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ item: cartItem }) => {
  const cartItems = useSelector(selectCartItems);

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
    <CheckoutItemContainer>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <NameSpan>{name}</NameSpan>
      <QuantitySpan>
        <div className='arrow' onClick={handleDecrement}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={handleIncrement}>
          &#10095;
        </div>
      </QuantitySpan>
      <PriceSpan>${price * quantity}</PriceSpan>
      <RemoveBtnContainer onClick={handleRemove}>&#10005;</RemoveBtnContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
