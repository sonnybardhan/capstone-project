import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item: cartItem }) => {
  const { id, imageUrl, name, price, quantity } = cartItem;
  const { removeProduct, decrementQuantity, addItemToCart } =
    useContext(CartContext);

  const handleIncrement = () => {
    addItemToCart(cartItem);
  };

  const handleDecrement = () => {
    decrementQuantity(id);
  };
  const handleRemove = () => {
    removeProduct(id);
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
