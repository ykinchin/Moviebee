import { FC } from 'react';

import { Box, FormControl, Typography } from '@mui/material';

import CustomInput from '../CustomInput/CustomInput';

const AuthForm: FC = () => {
  return (
    <Box>
      <Typography component="h1" fontSize={20} textAlign="center">
        Registration
      </Typography>
      <FormControl
        sx={{ display: 'flex', flexDirection: 'column', p: 3, gap: 3 }}
      >
        <CustomInput id="emailField" label="Email" />
        <CustomInput id="passwordField" label="Password" />
      </FormControl>
    </Box>
  );
};

export default AuthForm;
