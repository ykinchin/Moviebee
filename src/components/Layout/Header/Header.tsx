import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import useAuth from '../../../hooks/useAuth';
import SearchField from '../../SearchField/SearchField';
import Logo from '../../shared/Logo';

const Header: FC = () => {
  const { user, logout } = useAuth();
  const userName = user?.userEmail!.split('@')[0];

  return (
    <AppBar
      position='relative'
      sx={{ backgroundColor: '#161d2f', py: '0.5rem', zIndex: '10' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />

        <Box
          width={'40%'}
          display={'flex'}
          gap={20}
        >
          <Link to='/movies'>
            <Typography
              fontSize={20}
              sx={{ '&:hover': { color: 'orange' } }}
            >
              Movies
            </Typography>
          </Link>
          <Link to='/tv-shows'>
            <Typography
              fontSize={20}
              sx={{ '&:hover': { color: 'orange' } }}
            >
              TV-Shows
            </Typography>
          </Link>
        </Box>
        <Box
          width={'30%'}
          display={'flex'}
          justifyContent={'end'}
          gap={20}
        >
          <SearchField />

          {userName ? (
            <Box
              width={'full'}
              display={'flex'}
              justifyContent={'end'}
              gap={4}
            >
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#737782',
                  '&:hover': { backgroundColor: '#2d3343' }
                }}
              >
                <Link to={`${userName}/profile`}>{userName}</Link>
              </Button>
              <Button
                color='error'
                onClick={logout}
              >
                Sign Out
              </Button>
            </Box>
          ) : (
            <Button
              variant='contained'
              sx={{ backgroundColor: '#737782' }}
            >
              <Link to='/login'>Log In</Link>
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
