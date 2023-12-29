import { FC } from 'react';
import { IMovie } from '../../shared/types';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { image100Url } from '../../shared/constants/constants';
import { useNavigate } from 'react-router-dom';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

interface ResultItemProps {
  movie: IMovie;
}

const ResultItem: FC<ResultItemProps> = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        backgroundColor: 'inherit',
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        ':hover': { cursor: 'pointer' }
      }}
      onClick={() => navigate(`/${movie.media_type}/${movie.id}`)}
    >
      {movie.poster_path ? (
        <CardMedia
          sx={{ width: '80px' }}
          image={`${image100Url}${movie.poster_path}`}
          component='img'
        />
      ) : (
        <Box
          sx={{
            backgroundColor: 'inherit',
            display: 'flex',
            color: 'white',
            alignItems: 'center',
            ':hover': { cursor: 'pointer' }
          }}
        >
          <ImageNotSupportedIcon />
        </Box>
      )}
      <CardContent sx={{ width: '100%', maxWidth: '400px' }}>
        <Typography
          variant='h6'
          sx={{ wordBreak: 'break-word', minWidth: '300px' }}
        >
          {movie.title}
        </Typography>
        <Typography
          component='div'
          sx={{
            border: `1px solid ${movie.vote_average >= 5 ? 'green' : 'red'}`,
            width: 'max-content',
            borderRadius: '50%',
            p: 0.5
          }}
        >
          {movie.vote_average.toFixed(1)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResultItem;
