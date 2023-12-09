import { useQuery } from 'react-query';
import movieService from '../services/movieService';

export const useMovies = (endpoint: string) => {
  return useQuery(['movies'], () => movieService.getData(endpoint), {
    select: ({ data }) => data.docs
  });
};
