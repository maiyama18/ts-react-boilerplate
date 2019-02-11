import * as React from 'react';
import { firebase } from '../firebase/init';
import { AuthButton } from './AuthButton';
import { TaskForm } from './TaskForm';
const { useEffect, createContext, useState } = React;

interface Auth {
  loading: boolean;
  user: firebase.User | null;
}

const initialAuth = {
  loading: true,
  user: null,
};

export const AuthContext = createContext<Auth>(initialAuth);

const useFirebaseAuth = () => {
  const [auth, setAuth] = useState<Auth>(initialAuth);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setAuth({ loading: false, user });
    });
    return unsubscribe;
  }, []);

  return auth;
};

export const App = () => {
  const auth = useFirebaseAuth();

  return (
    <AuthContext.Provider value={auth}>
      <AuthButton />
      <TaskForm />
    </AuthContext.Provider>
  );
};
