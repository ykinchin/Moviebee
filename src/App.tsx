import { onAuthStateChanged } from 'firebase/auth';
import AppRouter from './appRouter/AppRouter';
import { auth } from './config/firebase';
import './index.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className='bg-primary-500 px-10 h-screen py-5'>
      <AppRouter />
    </div>
  );
}

export default App;
