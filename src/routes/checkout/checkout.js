import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { calculateTotal } from '../../store/cart/cart.action';
import { selectCart } from '../../store/cart/cart.selector';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useSelector(selectCart);

  return (
    <>
      <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} item={cartItem} />;
        })}
        <span className='total'>Total: ${calculateTotal(cartItems)}</span>
      </div>
    </>
  );
};

export default Checkout;
