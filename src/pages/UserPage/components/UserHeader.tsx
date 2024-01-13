import { FC } from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { userScreens } from '../../../shared/constants/userScreens';
import { Link } from 'react-router-dom';

const UserHeader: FC = () => {
  return (
    <AppBar
      position='relative'
      sx={{ backgroundColor: '#161d2f', zIndex: '10' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          display={'flex'}
          gap={20}
        >
          {userScreens.map((item, index) => (
            <Link
              to={item.path}
              key={index}
            >
              <Typography
                fontSize={18}
                sx={{ '&:hover': { color: 'orange' } }}
              >
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
