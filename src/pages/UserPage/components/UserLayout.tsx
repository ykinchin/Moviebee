import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Box, Paper } from '@mui/material';

import UserHeader from './UserHeader';

const UserLayout: FC = () => {
  return (
    <Box px={'20%'} py={'1%'}>
      <Paper
        square
        variant="outlined"
        sx={{
          backgroundColor: 'inherit',
          borderColor: 'rgba(255,255,255,0.3)',
          color: 'white',
          p: 1,
          minHeight: '60vh',
        }}
      >
        <UserHeader />
        <Box sx={{ mt: 3, mx: 2 }}>
          <Outlet />
        </Box>
      </Paper>
    </Box>
  );
};

export default UserLayout;
