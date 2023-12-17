import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase, Slide } from '@mui/material';

const SearchInput = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleSearchIconClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Box
      sx={{ minWidth: '300px' }}
      display={'flex'}
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
        />
      </Slide>
    </Box>
  );
};

export default SearchInput;
