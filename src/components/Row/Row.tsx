import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { Box, Typography } from '@mui/material';

import { IMovie, IPersonMovie } from '../../shared/types';
import RowItem from '../RowItem.tsx/RowItem';
import Slider from '../Slider/Slider';

type RowData = IMovie[] | IPersonMovie[];

interface RowProps {
  title: string;
  data: RowData | undefined;
  isLoading: boolean;
}

const Row: FC<RowProps> = ({ title, data, isLoading }) => {
  return (
    <Box mb={10}>
      <Typography variant="h5" pb={3} sx={{ textTransform: 'uppercase' }}>
        {title}
      </Typography>
      <Slider>
        {data &&
          data.map((movie) => (
            <SwiperSlide key={movie.id}>
              <RowItem movie={movie} isLoading={isLoading} />
            </SwiperSlide>
          ))}
      </Slider>
    </Box>
  );
};

export default Row;
