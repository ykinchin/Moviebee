import { FC } from 'react';
import { IMovie } from '../../shared/types';
import { imageUrl } from '../../shared/constants/constants';
import './index.css';
import Box from '@mui/material/Box/Box';

interface RowItemProps {
  movie: IMovie;
}
const RowItem: FC<RowItemProps> = ({ movie }) => {
  return (
    <Box>
      <img
        src={`${imageUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.title}
        style={{
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          height: '260px'
        }}
      />

      <Box>
        <Box>{movie?.title || movie?.name}</Box>
      </Box>
    </Box>
  );
};

export default RowItem;
