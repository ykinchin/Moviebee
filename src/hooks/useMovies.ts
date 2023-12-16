import { useQuery } from 'react-query';
import ApiService from '../api/apiService';

export const useMovie = (movieType: 'popular' | 'upcoming' | 'top_rated') => {
  return useQuery(
    ['movie', movieType],
    () => ApiService.getMovieList(movieType),
    {
      select: ({ data }) => data.results
    }
  );
};
