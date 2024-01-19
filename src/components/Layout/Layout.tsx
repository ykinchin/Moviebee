import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import Header from './Header/Header';

const Layout: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#10141F',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        gap: 3,
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
