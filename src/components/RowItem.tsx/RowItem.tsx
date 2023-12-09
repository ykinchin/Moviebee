import { FC } from 'react';
import { IMovie } from '../../shared/types';

interface RowItemProps {
  movie: IMovie;
}
const RowItem: FC<RowItemProps> = ({ movie }) => {
  return (
    <div className='inline-block cursor-pointer relative'>
      <img
        className='w-full h-auto block'
        alt={movie?.title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {movie?.title}
        </p>
      </div>
    </div>
  );
};

export default RowItem;
