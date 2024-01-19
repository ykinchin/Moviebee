import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box/Box';

import Logo from '../../components/shared/Logo';
import useAuth from '../../hooks/useAuth';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const { guestSignIn } = useAuth();

  const handleLogin = async () => {
    try {
      await guestSignIn();
      navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      <Logo />
      <Box>
        <Box onClick={() => handleLogin()}>Sign In as Guest</Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
