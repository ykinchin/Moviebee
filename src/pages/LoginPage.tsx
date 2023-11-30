import { FC } from 'react';
import Logo from '../shared/components/Logo';
import { useMutation } from 'react-query';

const LoginPage: FC = () => {
  const {} = useMutation({ mutationKey: ['login'] });

  return (
    <div className='h-full '>
      <Logo className='text-2xl' />
      <div className='flex items-center justify-center h-3/5'>
        <button className='border-2 border-secondary-300 px-10 py-5 text-2xl cursor-pointer hover:border-secondary-500 hover:text-secondary-500'>
          Sign In as Guest
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
