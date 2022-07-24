import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjhyS0BcAT5Rvx0oHGnnvuaO1e9dHiaak',
  authDomain: 'crown-clothing-db-58c61.firebaseapp.com',
  projectId: 'crown-clothing-db-58c61',
  storageBucket: 'crown-clothing-db-58c61.appspot.com',
  messagingSenderId: '178850246741',
  appId: '1:178850246741:web:245bb1bc32f83c46f5e4dc',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// console.log('firebaseApp: ', firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalDetails = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    console.log('User does not exist as yet!');
    console.log('creating user reference ... ');
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalDetails,
      });
      console.log('User created!');
    } catch (err) {
      console.log('There was an error in creating the user! ', err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
