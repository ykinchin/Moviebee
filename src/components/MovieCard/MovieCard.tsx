import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const MovieCard: FC = () => {
  const { id, category } = useParams();
  return (
    <Box>
      {id}
      {category}
    </Box>
  );
};

export default MovieCard;
