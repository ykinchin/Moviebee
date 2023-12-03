import { FC } from 'react';
import Logo from '../components/shared/Logo';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

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
    <div className='h-full '>
      <Logo className='text-2xl' />
      <div className='flex items-center justify-center h-3/5'>
        <button
          onClick={() => handleLogin()}
          className='border-2 border-secondary-300 px-10 py-5 text-2xl cursor-pointer hover:border-secondary-500 hover:text-secondary-500'
        >
          Sign In as Guest
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
