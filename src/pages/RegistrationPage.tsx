import { FC } from 'react';
import Logo from '../components/shared/Logo';
// import { useMutation } from 'react-query';
// import { mutationLogin } from '../utils/mutations/authMutation';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import useAuth from '../hooks/useAuth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { guest_login, guest_password } from '../shared/constants/constants';

const RegistrationPage: FC = () => {
  // const navigate = useNavigate();

  // const { data, mutate } = useMutation({
  //   mutationKey: ['login'],
  //   mutationFn: () => mutationLogin()
  // });

  // const handleLogin = async () => {
  //   await mutate();
  //   localStorage.setItem('guest_session_id', data.guest_session_id);
  //   navigate('/');
  // };

  // const options = {
  //   method: 'GET',
  //   url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
  //   headers: {
  //     'X-RapidAPI-Key': '1b2e51f74dmsh7c7c32516258ec6p135916jsn896ac0df461c',
  //     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  //   }
  // };
  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const { isAuth } = useAuth();

  // console.log(isAuth);

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className='h-full '>
      <Logo className='text-2xl' />
      <div className='flex items-center justify-center h-3/5'>
        <button
          onClick={() => handleRegister(guest_login, guest_password)}
          className='border-2 border-secondary-300 px-10 py-5 text-2xl cursor-pointer hover:border-secondary-500 hover:text-secondary-500'
        >
          Sign In as Guest
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
