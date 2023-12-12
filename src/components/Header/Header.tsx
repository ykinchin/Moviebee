import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';
import useAuth from '../../hooks/useAuth';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: FC = () => {
  const { user, logout } = useAuth();
  const userName = user?.userEmail!.split('@')[0];

  return (
    <AppBar sx={{ backgroundColor: '#161d2f', py: '0.5rem' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography fontSize={30}>
          <Logo />
        </Typography>

        <Box
          width={'60%'}
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
          width={300}
          display={'flex'}
          justifyContent={'right'}
        >
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
                <Link to='/user'>{userName}</Link>
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
