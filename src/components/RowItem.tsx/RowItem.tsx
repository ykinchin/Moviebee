import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Skeleton } from '@mui/material';

import noImage from '../../assets/noImage.svg';
import { imageUrl } from '../../shared/constants/constants';
import { IMovie, IPersonMovie } from '../../shared/types';
import './index.css';

interface RowItemProps {
  movie: IMovie | IPersonMovie;
  isLoading: boolean;
}
const RowItem: FC<RowItemProps> = ({ movie, isLoading }) => {
  const navigate = useNavigate();
  const link = `/${movie.first_air_date ? 'tv' : 'movie'}/${movie.id}`;
  const imagePath = movie?.backdrop_path
    ? imageUrl + movie.backdrop_path
    : movie?.poster_path
      ? imageUrl + movie.poster_path
      : noImage;

  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          animation="wave"
          height="260px"
          width="100%"
        />
      ) : (
        <Box position={'relative'} onClick={() => navigate(link)}>
          <img
            src={imagePath}
            alt={movie?.title}
            style={{
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              height: '260px',
              display: 'block',
            }}
          />
          <Box
            sx={{
              boxSizing: 'border-box',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              opacity: '0',
              px: '2rem',
              textAlign: 'center',
              '&:hover': { background: 'rgba(0, 0, 0, 0.8)', opacity: '100' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {movie?.title || movie?.name}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default RowItem;
