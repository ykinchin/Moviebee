import { FC } from 'react';
import Slider from '../Slider/Slider';
import RowItem from '../RowItem.tsx/RowItem';
import { SwiperSlide } from 'swiper/react';
import { IMovie, IPersonMovie } from '../../shared/types';
import { Box, Typography } from '@mui/material';

type RowData = IMovie[] | IPersonMovie[];

interface RowProps {
  title: string;
  data: RowData | undefined;
  isLoading: boolean;
}

const Row: FC<RowProps> = ({ title, data, isLoading }) => {
  return (
    <Box mb={10}>
      <Typography
        variant='h5'
        pb={3}
        sx={{ textTransform: 'uppercase' }}
      >
        {title}
      </Typography>
      <Slider>
        {data &&
          data.map((movie) => (
            <SwiperSlide key={movie.id}>
              <RowItem
                movie={movie}
                isLoading={isLoading}
              />
            </SwiperSlide>
          ))}
      </Slider>
    </Box>
  );
};

export default Row;
