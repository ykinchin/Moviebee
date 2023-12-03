import { FC } from 'react';
import { GiTreeBeehive } from 'react-icons/gi';
import { Link } from 'react-router-dom';

interface ILogoProps {
  className?: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <>
      <Link
        to='/'
        className={`${className} flex items-center`}
      >
        MovieBee
        <GiTreeBeehive />
      </Link>
    </>
  );
};

export default Logo;
