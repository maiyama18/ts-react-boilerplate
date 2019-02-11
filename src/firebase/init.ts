import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'tasks-hooks.firebaseapp.com',
  databaseURL: 'https://tasks-hooks.firebaseio.com',
  messagingSenderId: '830684755063',
  projectId: 'tasks-hooks',
  storageBucket: 'tasks-hooks.appspot.com',
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

const loginWithGoogle = () => {
  firebase.auth().signInWithRedirect(provider);
};
const logoutFromGoogle = () => {
  firebase.auth().signOut();
};

export { firebase, loginWithGoogle, logoutFromGoogle };
