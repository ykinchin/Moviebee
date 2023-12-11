import { useQuery } from 'react-query';
import movieService from '../services/movieService';

export const useTrending = () => {
  return useQuery(
    ['trending'],
    () => movieService.getData('/trending/movie/day?language=en-US'),
    {
      select: ({ data }) => data.results
    }
  );
};
