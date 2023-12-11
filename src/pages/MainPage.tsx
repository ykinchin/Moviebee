import { useTrending } from '../hooks/useTrending';
import { useUpcoming } from '../hooks/useUpcoming';
import Row from '../components/Row/Row';
import { useTVShows } from '../hooks/useTVShows';

const MainPage = () => {
  const { data: trendingData } = useTrending();
  const { data: upcomingData } = useUpcoming();
  const { data: tvData } = useTVShows();
  console.log(tvData);

  return (
    <div>
      <Row
        title='Popular'
        data={trendingData}
      />
      <Row
        title='Upcoming'
        data={upcomingData}
      />
      <Row
        title='Popular TV-Shows'
        data={tvData}
      />
    </div>
  );
};

export default MainPage;
