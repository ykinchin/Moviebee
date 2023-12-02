import { getAuth, signOut } from 'firebase/auth';
import { FC } from 'react';
import { GiTreeBeehive } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface ILogoProps {
  className?: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  const auth = getAuth();
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <Link
        to='/'
        className={`${className} flex items-center`}
      >
        MovieBee
        {auth.currentUser?.email}
        <GiTreeBeehive />
      </Link>
      <div onClick={() => signOut(auth)}>exit</div>
    </>
  );
};

export default Logo;
