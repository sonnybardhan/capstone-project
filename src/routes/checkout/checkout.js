import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import './checkout.styles.scss';

const Checkout = () => {
  const {
    cartItems,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
    calculateTotal,
  } = useContext(CartContext);

  return (
    <>
      <div>
        {cartItems.map((item) => {
          const { id, quantity, price, name, imageUrl } = item;
          return (
            <div key={id}>
              <img src={imageUrl} alt={name} />
              <span>{name}</span>
              <span>
                <button onClick={() => decrementQuantity(id)}>-</button>
                {quantity}
                <button onClick={() => incrementQuantity(id)}>+</button>
              </span>
              <span>{price}</span>
              <button onClick={() => removeProduct(id)}>X</button>
            </div>
          );
        })}
      </div>
      <div className='total'>Total: ${calculateTotal()}</div>
    </>
  );
};

export default Checkout;
