import Row from '../components/Row/Row';
import HeroSection from '../components/HeroSection/HeroSection';
import { useTvShows } from '../hooks/useTvShows';
import { useMovie } from '../hooks/useMovies';

const MainPage = () => {
  const { data: trendingData } = useTvShows('top_rated');
  const { data: upcomingData } = useMovie('popular');

  return (
    <>
      <HeroSection data={upcomingData} />
      <Row
        title='Trendig'
        data={trendingData}
      />
      {/* <Row
        title='Upcoming movies'
        data={upcomingData}
      />
      <Row
        title='Popular TV-Shows'
        data={tvData}
      /> */}
    </>
  );
};

export default MainPage;
