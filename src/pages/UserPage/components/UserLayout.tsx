import { FC } from 'react';
import UserHeader from './UserHeader';
import { Outlet } from 'react-router-dom';
import { Box, Paper } from '@mui/material';

const UserLayout: FC = () => {
  return (
    <Box
      px={'20%'}
      py={'1%'}
    >
      <Paper
        square
        variant='outlined'
        sx={{
          backgroundColor: 'inherit',
          borderColor: 'rgba(255,255,255,0.3)',
          color: 'white',
          p: 1,
          minHeight: '60vh'
        }}
      >
        <UserHeader />
        <Outlet />
      </Paper>
    </Box>
  );
};

export default UserLayout;
