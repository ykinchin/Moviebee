import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import HiveSharpIcon from '@mui/icons-material/HiveSharp';

const Logo: FC = () => {
  return (
    <Link to='/'>
      <Box
        fontSize={30}
        display={'flex'}
        alignItems={'center'}
        sx={{
          '&:hover .icon': {
            color: 'orange'
          }
        }}
      >
        MovieBee
        <HiveSharpIcon className='icon' />
      </Box>
    </Link>
  );
};

export default Logo;
