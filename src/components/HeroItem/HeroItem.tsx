import React, { FC } from 'react';
import { IMovie } from '../../shared/types';
import { Box, Button, Paper, Typography } from '@mui/material';
import { bannerUrl } from '../../shared/constants/constants';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface HeroItemProps {
  movie: IMovie;
}

const HeroItem: FC<HeroItemProps> = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Box maxHeight={'90vh'}>
      <Box
        position={'absolute'}
        width={'100%'}
        height={'100%'}
        sx={{ backgroundColor: 'black', zIndex: '10', opacity: '0.4' }}
      />
      <Paper
        square
        sx={{
          p: '3rem 2rem',
          maxWidth: '35vw',
          position: 'absolute',
          zIndex: '20',
          top: '20%',
          left: '5%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        <Box
          color='white'
          pb={8}
        >
          <Typography
            variant='h4'
            pb={2}
          >
            {movie.name || movie.title}
          </Typography>
          <Typography variant='h6'>{movie.overview}</Typography>
        </Box>
        <Link to={`/${movie.id}`}>
          <Button
            variant='outlined'
            sx={{
              color: 'white',
              border: '1px solid white',
              borderRadius: '0',
              ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            To the movie page
          </Button>
        </Link>
      </Paper>
      <img
        src={`${bannerUrl}${movie.backdrop_path}`}
        alt={movie?.name}
        style={{
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center top'
        }}
      />
    </Box>
  );
};

export default HeroItem;
