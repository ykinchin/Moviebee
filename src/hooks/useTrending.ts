import { useQuery } from 'react-query';
import ApiService from '../api/apiService';

export const useTrending = (
  category: string,
  url: 'popular' | 'on_the_air' | 'top_rated'
) => {
  return useQuery(category, () => ApiService.getTvList(url), {
    select: ({ data }) => data.results
  });
};
