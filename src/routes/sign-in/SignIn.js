import React from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from '../../utils/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
