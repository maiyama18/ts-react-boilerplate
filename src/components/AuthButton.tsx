import * as React from 'react';
import { loginWithGoogle, logoutFromGoogle } from '../firebase/init';
import { AuthContext } from './App';
const { useContext } = React;

export const AuthButton = () => {
  const auth = useContext(AuthContext);

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  if (auth.user != null) {
    return (
      <div>
        <button onClick={logoutFromGoogle}>logout</button>
        <span>{auth.user.displayName}</span>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={loginWithGoogle}>login</button>
      </div>
    );
  }
};
