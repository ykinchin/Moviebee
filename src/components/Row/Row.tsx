import { FC } from 'react';
import Slider from '../Slider/Slider';
import RowItem from '../RowItem.tsx/RowItem';
import { SwiperSlide } from 'swiper/react';
import { IMovie } from '../../shared/types';
import { Box } from '@mui/material';

interface RowProps {
  title: string;
  data: IMovie[] | undefined;
}

const Row: FC<RowProps> = ({ title, data }) => {
  return (
    <Box>
      <Box>{title}</Box>
      <Slider>
        {data &&
          data.map((movie) => (
            <SwiperSlide key={movie.id}>
              <RowItem movie={movie} />
            </SwiperSlide>
          ))}
      </Slider>
    </Box>
  );
};

export default Row;
