import Row from '../components/Row/Row';
import HeroSection from '../components/HeroSection/HeroSection';
import { useTvShows } from '../hooks/useTvShows';
import { useMovie } from '../hooks/useMovies';

const MainPage = () => {
  const { data: popularTvs } = useTvShows('popular');
  const { data: onTheAirTvs } = useTvShows('on_the_air');
  const { data: popularMovies } = useMovie('popular');
  const { data: upcomingMovies } = useMovie('upcoming');

  return (
    <>
      <HeroSection data={popularMovies} />
      <Row
        title='Upcoming movies'
        data={upcomingMovies}
      />
      <Row
        title='On the air TV-Shows'
        data={onTheAirTvs}
      />
      <Row
        title='Popular TV-Shows'
        data={popularTvs}
      />
    </>
  );
};

export default MainPage;
