import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import { signOutUser } from '../../utils/firebase';
import { CartContext } from '../../contexts/cartContext';

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { cartIsOpen } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            Shop
          </Link>
          {user ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link to='/auth' className='nav-link'>
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {cartIsOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
