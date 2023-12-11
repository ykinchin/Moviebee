import { FC } from 'react';
import { IMovie } from '../../shared/types';
import { imageUrl } from '../../shared/constants/constants';
import './index.css';

interface RowItemProps {
  movie: IMovie;
}
const RowItem: FC<RowItemProps> = ({ movie }) => {
  return (
    <div className=' cursor-pointer relative flex items-center justify-center'>
      <img
        className='w-full h-auto block max-h-[155px]  object-contain'
        src={`${imageUrl}${movie?.backdrop_path || movie?.poster_path}`}
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
