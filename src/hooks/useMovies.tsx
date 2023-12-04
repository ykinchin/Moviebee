import { useQuery } from 'react-query';
import movieService from '../services/movieService';

export const useMovies = () => {
  return useQuery(['movies'], () => movieService.getAllMovies(), {
    select: ({ data }) => data.results
  });
};
