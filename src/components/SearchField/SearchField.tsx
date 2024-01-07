import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase, Slide } from '@mui/material';
import { useQuery } from 'react-query';
import apiService from '../../api/apiService';
import useDebounce from '../../hooks/useDebounce';
import SearchResults from '../SearchResults/SearchResults';
import { useLocation } from 'react-router-dom';

const SearchInput = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const location = useLocation();

  const debouncedSearchTerm = useDebounce(searchValue, 200);

  const { data } = useQuery(
    ['movieSearch', debouncedSearchTerm],
    async () => {
      if (debouncedSearchTerm) {
        const response = await apiService.search(debouncedSearchTerm);
        return response.data;
      }
    },
    {
      enabled: !!debouncedSearchTerm,
      select: (data) => data?.results?.slice(0, 5)
    }
  );

  const handleSearchIconClick = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    setSearchValue('');
  }, [location]);

  return (
    <Box
      sx={{ minWidth: '300px' }}
      display={'flex'}
      position={'relative'}
    >
      <IconButton onClick={handleSearchIconClick}>
        <SearchIcon sx={{ color: 'white', fontSize: '2rem' }} />
      </IconButton>
      <Slide
        direction='down'
        in={isOpened}
        mountOnEnter
        unmountOnExit
      >
        <InputBase
          sx={{ borderBottom: '1px solid white', color: 'white' }}
          fullWidth
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Slide>
      <SearchResults data={data} />
    </Box>
  );
};

export default SearchInput;
