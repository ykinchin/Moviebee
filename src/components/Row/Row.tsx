import { FC } from 'react';
import Slider from '../Slider/Slider';
import RowItem from '../RowItem.tsx/RowItem';
import { SwiperSlide } from 'swiper/react';
import { IMovie } from '../../shared/types';

interface RowProps {
  title: string;
  data: IMovie[] | undefined;
}

const Row: FC<RowProps> = ({ title, data }) => {
  return (
    <>
      <>
        <h1>{title}</h1>
        <Slider>
          {data &&
            data.map((movie) => (
              <SwiperSlide key={movie.id}>
                <RowItem movie={movie} />
              </SwiperSlide>
            ))}
        </Slider>
      </>
    </>
  );
};

export default Row;
