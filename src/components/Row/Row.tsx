import { FC } from 'react';
import './index.css';
import { useMovies } from '../../hooks/useMovies';

const Row: FC = () => {
  const { data } = useMovies(
    '/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=enName&selectFields=type&selectFields=year&selectFields=description&selectFields=shortDescription&selectFields=movieLength&selectFields=isSeries&selectFields=ticketsOnSale&selectFields=totalSeriesLength&selectFields=seriesLength&selectFields=ratingMpaa&selectFields=ageRating&selectFields=top10&selectFields=top250&selectFields=typeNumber&selectFields=status&selectFields=names&selectFields=logo&selectFields=poster&selectFields=backdrop&selectFields=rating&selectFields=votes&selectFields=genres&selectFields=countries&selectFields=releaseYears'
  );
  console.log(data);

  return (
    <>
      <div>123</div>
    </>
  );
};

export default Row;
