import { useQuery } from 'react-query';
import movieService from '../services/movieService';

export const useTVShows = () => {
  return useQuery(
    ['tv'],
    () => movieService.getData('/trending/tv/day?language=en-US'),
    {
      select: ({ data }) => data.results
    }
  );
};
