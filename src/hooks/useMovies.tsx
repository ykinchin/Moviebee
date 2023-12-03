// import axios from 'axios';
// import { IMovie } from '../shared/types';
// import { basic_url } from '../shared/constants/urls';
// import { useQuery } from 'react-query';
// import { rapid_host, rapid_key } from '../shared/constants/constants';

// export const useMovies = (url: string) => {
//   return useQuery(['movies'], () => axios.get('123'), {
//     select: ({ data }) => data
//   });
//   //       const { isLoading, error, data } = useQuery(
//   //     ['movies'],
//   //     () =>
//   //       axios.get<IMovie[]>(`${basic_url}${url}`{
//   //         headers: {,
//   //           'X-RapidAPI-Key': rapid_key,
//   //           'X-RapidAPI-Host': rapid_host
//   //         }
//   //       }),
//   //     { select: ({ data }) => data }
//   //   );
// };

import { useQuery } from 'react-query';
import movieService from '../services/movieService';

export const useMovies = () => {
  return useQuery(['movies'], () => movieService.getAllMovies(), {
    select: ({ data }) => data.results
  });
};
