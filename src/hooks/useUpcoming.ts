import { useQuery } from 'react-query';
import movieService from '../services/movieService';

export const useUpcoming = () => {
  return useQuery(
    ['upcoming'],
    () => movieService.getData('/movie/upcoming?language=en-US&page=1'),
    {
      select: ({ data }) => data.results
    }
  );
};
