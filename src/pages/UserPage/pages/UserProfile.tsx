import { FC } from 'react';

import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import useAuth from '../../../hooks/useAuth';

const UserProfile: FC = () => {
  const { user } = useAuth();

  return (
    <Box>
      <List
        sx={{
          width: '30%',
          fontSize: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <ListItem>
          <ListItemAvatar sx={{ mb: 4 }}>
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ height: 100, width: 100 }}
            />
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <ListItemText primary="User name" />
          <Typography>{user?.userEmail}</Typography>
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ bgcolor: 'rgba(255,255,255,0.3)' }}
        />
        <ListItem>
          <ListItemText primary="Favorite movies" />
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ bgcolor: 'rgba(255,255,255,0.3)' }}
        />
        <ListItem>
          <ListItemText primary="Favorite TV-Shows" />
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ bgcolor: 'rgba(255,255,255,0.3)' }}
        />
        <ListItem>
          <ListItemText primary="List item" />
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ bgcolor: 'rgba(255,255,255,0.3)' }}
        />
      </List>
    </Box>
  );
};

export default UserProfile;
