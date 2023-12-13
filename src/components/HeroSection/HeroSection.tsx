import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { IMovie } from '../../shared/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import HeroItem from '../HeroItem/HeroItem';

interface HeroSectionProps {
  data: IMovie[] | undefined;
}

const HeroSection: FC<HeroSectionProps> = ({ data }) => {
  return (
    <Box>
      <Swiper loop>
        {data &&
          data.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HeroItem movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;
