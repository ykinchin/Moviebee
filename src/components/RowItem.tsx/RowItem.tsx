import { FC } from 'react';
import { IMovie } from '../../shared/types';
import { imageUrl } from '../../shared/constants/constants';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { Skeleton, Box } from '@mui/material';

interface RowItemProps {
  movie: IMovie;
  isLoading: boolean;
}
const RowItem: FC<RowItemProps> = ({ movie, isLoading }) => {
  const navigate = useNavigate();
  const link = `/${movie.first_air_date ? 'tv' : 'movie'}/${movie.id}`;
  return (
    <>
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          animation='wave'
          height='260px'
          width='100%'
        />
      ) : (
        <Box
          position={'relative'}
          onClick={() => navigate(link)}
        >
          <img
            src={`${imageUrl}${movie?.backdrop_path || movie?.poster_path}`}
            alt={movie?.title}
            style={{
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              height: '260px',
              display: 'block'
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
              '&:hover': { background: 'rgba(0, 0, 0, 0.8)', opacity: '100' }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textTransform: 'uppercase',
                letterSpacing: '1px'
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
