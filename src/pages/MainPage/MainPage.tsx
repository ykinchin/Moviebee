import Row from '../../components/Row/Row';
import HeroSection from './components/HeroSection/HeroSection';
import { useTvShows } from '../../hooks/useTvShows';
import { useMovie } from '../../hooks/useMovies';
import { Box } from '@mui/material';

const MainPage = () => {
  const { isLoading: isLoadingPopularTVs, data: popularTvs } =
    useTvShows('popular');
  const { isLoading: isLoadingAirTVs, data: onTheAirTvs } =
    useTvShows('on_the_air');
  const { isLoading: isLoadingPopular, data: popularMovies } =
    useMovie('popular');
  const { isLoading: isLoadingUpcoming, data: upcomingMovies } =
    useMovie('upcoming');

  return (
    <>
      <HeroSection
        data={popularMovies}
        isLoading={isLoadingPopular}
      />
      <Box px={15}>
        <Row
          title='Upcoming movies'
          data={upcomingMovies}
          isLoading={isLoadingUpcoming}
        />
        <Row
          title='On the air TV-Shows'
          data={onTheAirTvs}
          isLoading={isLoadingAirTVs}
        />
        <Row
          title='Popular TV-Shows'
          data={popularTvs}
          isLoading={isLoadingPopularTVs}
        />
      </Box>
    </>
  );
};

export default MainPage;
