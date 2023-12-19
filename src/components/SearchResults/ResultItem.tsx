import { FC } from 'react';
import { IMovie } from '../../shared/types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { image100Url } from '../../shared/constants/constants';
import { useNavigate } from 'react-router-dom';

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
        alignItems: 'center'
      }}
      onClick={() => navigate('/')}
    >
      <CardMedia
        sx={{ width: '80px' }}
        image={`${image100Url}${movie?.poster_path}`}
        component='img'
      />
      <CardContent>
        <Typography variant='h6'>{movie.title}</Typography>
        <Typography component='div'>{movie.vote_average.toFixed(1)}</Typography>
      </CardContent>
    </Card>
  );
};

export default ResultItem;
