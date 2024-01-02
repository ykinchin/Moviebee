import { FC } from 'react';
import Box from '@mui/material/Box/Box';
import { useQuery } from 'react-query';
import apiService from '../api/apiService';
import { useParams } from 'react-router-dom';
import { imageUrl } from '../shared/constants/constants';
import { Chip, Typography, Divider } from '@mui/material';
import CreditsSection from '../components/CreditsSection/CreditsSection';
import Row from '../components/Row/Row';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';

const MoviePage: FC = () => {
  const { id, category } = useParams<Record<string, 'movie' | 'tv'>>();

  const { data: movie } = useQuery([id], async () => {
    const response = await apiService.detail(category, id);
    return response.data;
  });

  const { data: credits } = useQuery([`${id}-credits`], async () => {
    const response = await apiService.credits(category, id);
    return response.data;
  });

  const { data: similar } = useQuery([`${id}-similar`], async () => {
    const response = await apiService.similar(category, id);
    return response.data.results;
  });

  const { data: reviews } = useQuery([`${id}-reviews`], async () => {
    const response = await apiService.reviews(category, id);
    return response.data.results;
  });

  return (
    <Box sx={{ maxWidth: '60%', mx: 'auto', mt: 10 }}>
      <Box sx={{ display: 'flex', width: '100%', gap: 20, pb: 10 }}>
        <Box>
          <img
            src={`${imageUrl}${movie?.poster_path}`}
            alt={`${movie?.title} ` || 'movie poster'}
          />
        </Box>
        <Box
          sx={{
            border: '1px solid rgba(255,255,255,0.4)',
            padding: 4,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between'
            }}
            pb={5}
          >
            <Typography variant='h4'>{movie?.title || movie?.name}</Typography>
            <Box
              sx={{
                border: `4px solid ${
                  movie?.vote_average && movie?.vote_average >= 5
                    ? 'green'
                    : 'red'
                }`,
                borderRadius: 10,
                p: 1
              }}
            >
              {movie?.vote_average.toFixed(1)}
            </Box>
          </Box>
          {movie?.tagline && (
            <Typography sx={{ color: 'rgba(234,148,55,0.7)' }}>
              {movie.tagline}
            </Typography>
          )}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography fontSize={18}>Genre:</Typography>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {movie?.genres.map((genre) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  color='default'
                  variant='outlined'
                  sx={{ color: 'white', borderRadius: 2 }}
                />
              ))}
            </Box>
          </Box>
          <Box>
            {category === 'movie' ? (
              <Box
                display={'flex'}
                gap={2}
              >
                <Typography fontSize={18}>Release date:</Typography>
                <Typography sx={{ textDecoration: 'underline' }}>
                  {movie?.release_date}
                </Typography>
              </Box>
            ) : (
              <Box
                display={'flex'}
                gap={2}
              >
                <Typography fontSize={18}>First aire date:</Typography>
                <Typography sx={{ textDecoration: 'underline' }}>
                  {movie?.first_air_date}
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            display={'flex'}
            gap={2}
          >
            <Typography fontSize={18}>Original language:</Typography>
            <Typography sx={{ textDecoration: 'underline' }}>
              {movie?.original_language}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography fontSize={18}>Production countries:</Typography>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {movie?.production_countries.map((country) => (
                <Chip
                  key={country.iso_3166_1}
                  label={country.iso_3166_1}
                  color='default'
                  variant='outlined'
                  sx={{ color: 'white', borderRadius: 2 }}
                />
              ))}
            </Box>
          </Box>
          <Box
            display={'flex'}
            gap={2}
          >
            <Typography fontSize={18}>Status:</Typography>
            <Typography sx={{ textDecoration: 'underline' }}>
              {movie?.status}
            </Typography>
          </Box>
          <Divider
            variant='fullWidth'
            sx={{ backgroundColor: 'white' }}
          />
          <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
            {movie?.overview}
          </Typography>
        </Box>
      </Box>
      {credits && (
        <CreditsSection
          credits={credits}
          title='cast'
        />
      )}
      {similar && (
        <Row
          data={similar}
          title='You might like it'
        />
      )}
      {reviews && <ReviewsSection reviews={reviews} />}
    </Box>
  );
};

export default MoviePage;
