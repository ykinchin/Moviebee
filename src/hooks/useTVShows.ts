import { useQuery } from 'react-query';
import ApiService from '../api/apiService';

export const useTvShows = (tvType: 'popular' | 'on_the_air' | 'top_rated') => {
  return useQuery(['tv', tvType], () => ApiService.getTvList(tvType), {
    select: ({ data }) => data.results
  });
};
