import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { userScreens } from '../../../shared/constants/userScreens';

const UserHeader: FC = () => {
  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: '#161d2f', zIndex: '10' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', gap: 20 }}>
          {userScreens.map((item, index) => (
            <Link to={item.path} key={index} style={{ flex: 1 }}>
              <Typography fontSize={18} sx={{ '&:hover': { color: 'orange' } }}>
                {item.title}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserHeader;
