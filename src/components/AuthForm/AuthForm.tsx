import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Box, Button, Stack, Tooltip, Typography } from '@mui/material';

import useAuth from '../../hooks/useAuth';
import CustomInput from '../CustomInput/CustomInput';

interface AuthFormProps {
  formTitle: string;
  buttonTitle: string;
  text: string;
  linkPath: '/registration' | '/login';
  linkTitle: string;
}

const AuthForm: FC<AuthFormProps> = ({
  formTitle,
  buttonTitle,
  text,
  linkPath,
  linkTitle,
}) => {
  const { guestSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGuestLogin = async () => {
    try {
      await guestSignIn();
      navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        p: 5,
        border: '1px solid rgba(255,255,255,0.3)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography component="h1" fontSize={20} textAlign="center">
        {formTitle}
      </Typography>
      <Stack sx={{ py: 5, gap: 3 }}>
        <CustomInput id="emailField" label="Email" />
        <CustomInput id="passwordField" label="Password" />
      </Stack>
      <Button>{buttonTitle}</Button>

      <Stack sx={{ alignItems: 'center', mt: 5, width: '100%', gap: 1 }}>
        <Typography>{text}</Typography>
        <Link to={linkPath} style={{ width: '100%' }}>
          <Button sx={{ width: '100%' }}>{linkTitle}</Button>
        </Link>
        <Typography>or just</Typography>
        <Tooltip
          sx={{ width: '100%' }}
          title={
            <Typography sx={{ fontSize: 16, textAlign: 'center' }}>
              Guest account is a demo account. You will have all the features,
              but the movie collection will not be unique
            </Typography>
          }
          placement="bottom"
        >
          <Button onClick={handleGuestLogin}>Sign in as Guest</Button>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default AuthForm;
