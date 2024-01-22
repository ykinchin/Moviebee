import {
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { FC, createContext, useEffect, useState } from 'react';

import { auth, db } from '../firebase-config';
import { IUser, IUserData } from '../shared/types';

type AuthProviderType = {
  children: JSX.Element;
};

type AuthContextType = {
  guestSignIn: () => void;
  user: IUser | null;
  createUser: (
    email: string,
    password: string,
  ) => Promise<UserCredential | void>;
  signIn: (email: string, password: string) => Promise<UserCredential | void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  guestSignIn: () => {},
  createUser: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          userEmail: currentUser.email!,
          phoneNumber: currentUser?.phoneNumber,
          photoURL: currentUser?.photoURL,
          uid: currentUser?.uid,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Wait for the user state to be updated before creating userData
    setUser({
      userEmail: userCredential.user.email!,
      phoneNumber: userCredential.user?.phoneNumber,
      photoURL: userCredential.user?.photoURL,
      uid: userCredential.user?.uid,
    });

    const userData: IUserData = {
      user: {
        userEmail: userCredential.user.email!,
        phoneNumber: userCredential.user?.phoneNumber,
        photoURL: userCredential.user?.photoURL,
        uid: userCredential.user?.uid,
      },
      likedActors: [],
      likedMovies: [],
      likedSeries: [],
      comments: [],
    };

    await setDoc(doc(db, 'users', email), userData);

    return userCredential;
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const guestSignIn = () => {
    return signInWithEmailAndPassword(
      auth,
      'bestguest@gmail.com',
      'bestguestomg',
    );
  };

  const logout = () => {
    setUser(null);
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, createUser, signIn, guestSignIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
