import { FC } from 'react';

import Box from '@mui/material/Box/Box';

import AuthForm from '../../components/AuthForm/AuthForm';

const LoginPage: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AuthForm
        formTitle="Enter Your Account"
        buttonTitle="Sign in"
        text="If you still don't have an account?"
        linkPath="/registration"
      />
      {/* <Box onClick={() => handleLogin()}>Sign In as Guest</Box> */}
    </Box>
  );
};

export default LoginPage;
