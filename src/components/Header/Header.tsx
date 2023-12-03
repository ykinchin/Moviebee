import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';
import useAuth from '../../hooks/useAuth';

const Header: FC = () => {
  const { user, logout } = useAuth();
  const userName = user?.userEmail!.split('@')[0];

  return (
    <header className='w-full flex justify-between text-2xl'>
      <ul className='w-1/3 flex justify-between '>
        <li>
          <Logo />
        </li>
        <li>
          <Link to='/movies'>Movies</Link>
        </li>
        <li>
          <Link to='/tv-shows'>TV-Shows</Link>
        </li>
      </ul>
      <div className='text-right w-1/3 '>
        {userName ? (
          <div className='flex gap-6 items-baseline justify-end'>
            <Link to='/user'>{userName}</Link>
            <span
              onClick={logout}
              className='text-lg'
            >
              Sign Out
            </span>
          </div>
        ) : (
          <Link to='/login'>Log In</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
