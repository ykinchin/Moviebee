import { FC } from 'react';

import Box from '@mui/material/Box/Box';

import AuthForm from '../../components/AuthForm/AuthForm';
import useAuth from '../../hooks/useAuth';

const RegistrationPage: FC = () => {
  const { createUser } = useAuth();
  const onRegisterhandler = (email: string, password: string) => {
    createUser(email, password);
  };

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
        formTitle="Create Your Account"
        buttonTitle="Sign up"
        text="If you already have an account?"
        linkTitle="Enter Your Account"
        linkPath="/login"
        onClickHandler={onRegisterhandler}
      />
      {/* <Box onClick={() => handleLogin()}>Sign In as Guest</Box> */}
    </Box>
  );
};

export default RegistrationPage;
