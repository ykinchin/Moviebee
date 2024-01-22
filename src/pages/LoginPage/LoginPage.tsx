import { FC } from 'react';

import Box from '@mui/material/Box/Box';

import AuthForm from '../../components/AuthForm/AuthForm';
import useAuth from '../../hooks/useAuth';

const LoginPage: FC = () => {
  const { signIn } = useAuth();
  const signInHandler = async (email: string, password: string) => {
    try {
      console.log(email);

      await signIn(email, password);
    } catch (e) {
      console.log(e.message);
    }
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
        formTitle="Enter Your Account"
        buttonTitle="Sign in"
        text="If you still don't have an account?"
        linkTitle="Create Your Account"
        linkPath="/registration"
        onClickHandler={signInHandler}
      />
    </Box>
  );
};

export default LoginPage;
