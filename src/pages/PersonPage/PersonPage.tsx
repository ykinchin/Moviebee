import { Box, Divider, Typography } from '@mui/material';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import apiService from '../../api/apiService';
import { imageUrl } from '../../shared/constants/constants';
import { IPerson } from '../../shared/types';

const PersonPage: FC = () => {
  const { id } = useParams();
  const { data: person } = useQuery([id], async () => {
    const response = await apiService.personDetail(id);
    return response.data as IPerson;
  });
  const { data: personMovies } = useQuery([`${id}movies`], async () => {
    const response = await apiService.personMovies(id);
    return response.data as IPerson;
  });
  const { data: personTVs } = useQuery([`${id}tvs`], async () => {
    const response = await apiService.personTVs(id);
    return response.data as IPerson;
  });


  const { isLoading: isLoadingMovies, data: personMovies } = useQuery(
    [`${id}movies`],
    async () => {
      const response = await apiService.personMovies(id);
      return response.data.cast as IPersonMovie[];
    }
  );
  const { isLoading: isLoadingTVs, data: personTVs } = useQuery(
    [`${id}tvs`],
    async () => {
      const response = await apiService.personTVs(id);
      return response.data.cast as IPersonMovie[];
    }
  );
  console.log(personTVs);
  return (
    <Box sx={{ maxWidth: '60%', mx: 'auto', mt: 10 }}>
      <Box sx={{ display: 'flex', width: '100%', gap: 20, pb: 10 }}>
        <Box>
          <img
            src={`${imageUrl}${person?.profile_path}`}
            alt={`${person?.name} ` || 'movie poster'}
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
            <Typography variant='h4'>{person?.name}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography fontSize={18}>Born:</Typography>
            <Typography sx={{ textDecoration: 'underline' }}>
              {person?.birthday}
            </Typography>
          </Box>
          {person?.deathday && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Typography fontSize={18}>Died:</Typography>
              <Typography sx={{ textDecoration: 'underline' }}>
                {person?.deathday}
              </Typography>
            </Box>
          )}
          <Box>
            <Box
              display={'flex'}
              gap={2}
            >
              <Typography fontSize={18}>Place of birth:</Typography>
              <Typography>{person?.place_of_birth}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography fontSize={18}>Popularity: </Typography>
            <Typography fontSize={18}>
              {person?.popularity.toFixed(1)}
            </Typography>
          </Box>
          <Divider
            variant='fullWidth'
            sx={{ backgroundColor: 'white' }}
          />
          <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
            {person?.biography}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonPage;
