import { FC } from 'react';

import Box from '@mui/material/Box/Box';

import AuthForm from '../../components/AuthForm/AuthForm';

const RegistrationPage: FC = () => {
  // const handleRegister = (email: string, password: string) => {
  //   createUserWithEmailAndPassword(auth, email, password);
  // };

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
      />
      {/* <Box onClick={() => handleLogin()}>Sign In as Guest</Box> */}
    </Box>
  );
};

export default RegistrationPage;
