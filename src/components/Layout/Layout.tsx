import { FC } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#10141F',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        gap: 3,
        height: '100%'
      }}
    >
      <Box
        sx={{ width: '100%' }}
        height={'100%'}
      >
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
