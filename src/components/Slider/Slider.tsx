import { FC } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface SliderProps {
  children: React.ReactNode;
}

const Slider: FC<SliderProps> = ({ children }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <Swiper
      navigation
      loop
      mousewheel={{ invert: false, sensitivity: 1 }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 0
        }
      }}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
