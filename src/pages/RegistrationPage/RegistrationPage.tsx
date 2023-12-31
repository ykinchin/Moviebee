import { FC } from 'react';
import Logo from '../../components/shared/Logo';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { guest_login, guest_password } from '../../shared/constants/constants';
import Box from '@mui/material/Box/Box';

const RegistrationPage: FC = () => {
  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <Box>
      <Logo />
      <Box>
        <Box onClick={() => handleRegister(guest_login, guest_password)}>
          Sign In as Guest
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
