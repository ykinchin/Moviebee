import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import RowItem from '../RowItem.tsx/RowItem';
import { useMovies } from '../../hooks/useMovies';
import Slider from '../Slider/Slider';
import './index.css';

const Row: FC = () => {
  const { isLoading, data } = useMovies('/movie/popular?language=en-US&page=1');
  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          <h2 className=''>title</h2>
          <Slider>
            {data!.map((movie) => (
              <SwiperSlide key={movie.id}>
                <RowItem movie={movie} />
              </SwiperSlide>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default Row;
