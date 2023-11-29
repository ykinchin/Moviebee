import { FC } from 'react';
import { Link } from 'react-router-dom';
import { GiTreeBeehive } from 'react-icons/gi';

const Header: FC = () => {
  return (
    <header className='w-full flex justify-between text-2xl'>
      <ul className='w-1/3 flex justify-between '>
        <li>
          <Link
            to='/'
            className='flex items-center'
          >
            MovieBee
            <GiTreeBeehive />
          </Link>
        </li>
        <li>
          <Link to='/movies'>Movies</Link>
        </li>
        <li>
          <Link to='/tv-shows'>TV-Shows</Link>
        </li>
      </ul>
      <span className='w-1/3 text-right'>
        <Link to='/'>Log In</Link>
      </span>
    </header>
  );
};

export default Header;
