import { FC } from 'react';
import Box from '@mui/material/Box';
import { IMovie } from '../../../../shared/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import HeroItem from './HeroItem';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Skeleton } from '@mui/material';

interface HeroSectionProps {
  data: IMovie[] | undefined;
  isLoading: boolean;
}

const HeroSection: FC<HeroSectionProps> = ({ data, isLoading }) => {
  SwiperCore.use([Autoplay]);
  return (
    <Box mb={10}>
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          animation='wave'
          height='90vh'
          width='100%'
        />
      ) : (
        <Swiper
          autoplay={{
            delay: 7000,
            disableOnInteraction: false
          }}
          speed={2000}
          loop
        >
          {data &&
            data.map((movie) => (
              <SwiperSlide key={movie.id}>
                <HeroItem movie={movie} />
              </SwiperSlide>
            ))}
          <Box
            width={'100%'}
            height={'20vh'}
            bottom={'0'}
            position={'absolute'}
            sx={{
              zIndex: '10',
              background:
                'linear-gradient(0deg, rgba(16,20,31,1) 20%, rgba(16,20,31,0.6) 46%, rgba(255,255,255,0) 100%)'
            }}
          />
        </Swiper>
      )}
    </Box>
  );
};

export default HeroSection;
