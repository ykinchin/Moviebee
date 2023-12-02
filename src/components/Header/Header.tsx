import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';
import { getAuth } from 'firebase/auth';

const Header: FC = () => {
  const auth = getAuth();
  const userName = null;
  console.log(auth);
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
      <span className='w-1/3 text-right'>
        {userName ? (
          <Link to='/user'>{userName}</Link>
        ) : (
          <Link to='/login'>Log In</Link>
        )}
      </span>
    </header>
  );
};

export default Header;
