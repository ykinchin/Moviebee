import { createContext, useState, useEffect, FC } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential
} from 'firebase/auth';

import { guest_login, guest_password } from '../shared/constants/constants';
import { auth } from '../firebase-config';

type AuthProviderType = {
  children: JSX.Element;
};

type AuthContextType = {
  guestSignIn: () => void;
  user: IUser | null;
  createUser: (
    email: string,
    password: string
  ) => Promise<UserCredential | void>;
  signIn: (email: string, password: string) => Promise<UserCredential | void>;
  logout: () => Promise<void>;
};

interface IUser {
  userEmail: string;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  guestSignIn: () => {},
  createUser: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const guestSignIn = () => {
    return signInWithEmailAndPassword(auth, guest_login, guest_password);
  };

  const logout = () => {
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          userEmail: currentUser.email!,
          phoneNumber: currentUser?.phoneNumber,
          photoURL: currentUser?.photoURL,
          uid: currentUser?.uid
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, createUser, signIn, guestSignIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
