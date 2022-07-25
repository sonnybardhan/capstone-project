import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './sign-in-form.styles.scss';
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { setUser } = useContext(UserContext);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const popupMessage = (msg, delay = 0) => {
    if (!msg) return;
    setTimeout(() => {
      alert(msg);
    }, delay);
  };

  const handleSubmit = async (e) => {
    console.log('BUTTON PRESSED.');
    e.preventDefault();

    if (!email || !password) {
      console.log('Please enter your email and password to sign in.');
      return;
    }

    try {
      setDisableSubmit(true);
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log('response: ', response);
      setUser(response.user);
      popupMessage('Sign in successful!');
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          popupMessage(`Sorry, user not found.`);
          break;
        case 'auth/wrong-password':
          popupMessage('Sorry, that was not the correct password.');
          break;
        default:
          popupMessage(`Something went wrong while signing in. ${err.code}`);
          console.log(`Something went wrong while signing in. ${err.code}`);
      }
    }
    setDisableSubmit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    await createUserDocFromAuth(response.user);
  };

  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          htmlFor='sign-in-email'
          id='sign-in-email'
          name='email'
          type='email'
          required
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label='Password'
          htmlFor='sign-in-password'
          id='sign-in-password'
          name='password'
          type='password'
          required
          value={password}
          onChange={handleChange}
        />
        <div className='buttons-container'>
          <Button type='submit' disabled={disableSubmit}>
            Sign In
          </Button>
          <Button
            type='button'
            disabled={disableSubmit}
            buttonType='google'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
