import { FC } from 'react';
import Box from '@mui/material/Box/Box';
import MovieCard from '../components/MovieCard/MovieCard';
import { useQuery } from 'react-query';
import apiService from '../api/apiService';
import { useParams } from 'react-router-dom';

const MoviePage: FC = () => {
  const { id, category } = useParams<Record<string, 'movie' | 'tv'>>();

  const { data } = useQuery(['movie'], async () => {
    const response = await apiService.detail(category, id);
    return response.data;
  });

  console.log(data);
  return (
    <Box>
      <MovieCard />
    </Box>
  );
};

export default MoviePage;
