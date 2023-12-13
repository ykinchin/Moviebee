import { useTrending } from '../hooks/useTrending';
import { useUpcoming } from '../hooks/useUpcoming';
import Row from '../components/Row/Row';
import { useTVShows } from '../hooks/useTVShows';
import HeroSection from '../components/HeroSection/HeroSection';

const MainPage = () => {
  const { data: trendingData } = useTrending();
  const { data: upcomingData } = useUpcoming();
  const { data: tvData } = useTVShows();

  return (
    <>
      <HeroSection data={trendingData} />
      <Row
        title='Trendig'
        data={trendingData}
      />
      <Row
        title='Upcoming movies'
        data={upcomingData}
      />
      <Row
        title='Popular TV-Shows'
        data={tvData}
      />
    </>
  );
};

export default MainPage;
