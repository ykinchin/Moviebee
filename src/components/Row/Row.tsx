import { FC } from 'react';
import './index.css';
import { useMovies } from '../../hooks/useMovies';

const Row: FC = () => {
  const { data } = useMovies('/trending/movie/day?language=en-US');
  console.log(data);

  return (
    <>
      <div>123</div>
    </>
  );
};

export default Row;
