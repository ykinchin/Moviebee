import { FC } from 'react';
import RowItem from '../RowItem.tsx/RowItem';
import { useMovies } from '../../hooks/useMovies';

const Row: FC = () => {
  const { isLoading, data } = useMovies();

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          <h2 className='text-white font-bold md:text-xl p-4'>title</h2>
          <div className='relative flex items-center group'>
            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
              {data!.map((movie) => (
                <RowItem
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Row;
