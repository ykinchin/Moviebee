import { FC } from 'react';
import { IMovie } from '../../shared/types';
import { Box } from '@mui/material';
import ResultItem from './ResultItem';

interface SearchResultsProps {
  data: IMovie[];
}

const SearchResults: FC<SearchResultsProps> = ({ data }) => {
  return (
    <Box
      position={'absolute'}
      sx={{
        background: '#161d2f',
        top: '65px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}
    >
      {data &&
        data.map((movie) => (
          <ResultItem
            key={movie.id}
            movie={movie}
          />
        ))}
    </Box>
  );
};

export default SearchResults;
