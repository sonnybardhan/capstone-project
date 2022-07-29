import './product-card.styles.scss';
import Button from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/cart.selector';
import {
  setCartItems,
  setTotalCartAmount,
  setTotalCartItems,
} from '../../store/cart/cart.action';
import { useEffect } from 'react';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItems, totalCartItems } = useSelector(selectCart);

  const { name, imageUrl, price } = product;

  const addProductToCart = () => {
    dispatch(setCartItems(cartItems, product));
  };

  useEffect(() => {
    dispatch(setTotalCartItems(cartItems));
  }, [cartItems]);

  useEffect(() => {
    dispatch(setTotalCartAmount(cartItems));
  }, [totalCartItems]);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
