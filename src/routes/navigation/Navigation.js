import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';

const Navigation = () => {
  const { user } = useContext(UserContext);

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
          <Link to='/auth' className='nav-link'>
            {user ? 'Sign Out' : 'Sign In'}
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
