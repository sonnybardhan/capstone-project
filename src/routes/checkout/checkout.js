import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { CartContext } from '../../contexts/cartContext';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, calculateTotal } = useContext(CartContext);

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
        <span className='total'>Total: ${calculateTotal()}</span>
      </div>
    </>
  );
};

export default Checkout;

{
  /* <div key={id}>
              <img src={imageUrl} alt={name} />
              <span>{name}</span>
              <span>
                <button onClick={() => decrementQuantity(id)}>-</button>
                {quantity}
                <button onClick={() => incrementQuantity(id)}>+</button>
              </span>
              <span>{price}</span>
              <button onClick={() => removeProduct(id)}>X</button>
            </div> */
}
