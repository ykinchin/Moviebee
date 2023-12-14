import { FC } from 'react';
import Slider from '../Slider/Slider';
import RowItem from '../RowItem.tsx/RowItem';
import { SwiperSlide } from 'swiper/react';
import { IMovie } from '../../shared/types';
import { Box, Typography } from '@mui/material';

interface RowProps {
  title: string;
  data: IMovie[] | undefined;
}

const Row: FC<RowProps> = ({ title, data }) => {
  return (
    <Box
      px={15}
      pb={10}
    >
      <Typography
        variant='h5'
        pb={3}
      >
        {title}
      </Typography>
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
