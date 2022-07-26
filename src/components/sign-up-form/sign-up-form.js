import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '../../utils/firebase';
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('The password and confirm password fields should match.');
      return;
    }

    try {
      setDisableSubmit(true);
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, {
        displayName,
      });
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setTimeout(() => {
          alert(
            'Cannot create user as the email id is already in use. Please try again.'
          );
        }, 0);
      } else {
        console.log(
          'Something went wrong while signing up the user ... ',
          err.code
        );
      }
    }
    resetFormFields();
    setDisableSubmit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          htmlFor='sign-up-displayName'
          id='sign-up-displayName'
          name='displayName'
          type='text'
          required
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label='Email'
          htmlFor='sign-up-email'
          id='sign-up-email'
          name='email'
          type='email'
          required
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label='Password'
          htmlFor='sign-up-password'
          id='sign-up-password'
          name='password'
          type='password'
          required
          value={password}
          minLength='6'
          onChange={handleChange}
        />
        <FormInput
          label='Confirm Password'
          htmlFor='sign-up-confirmPassword'
          id='sign-up-confirmPassword'
          name='confirmPassword'
          type='password'
          required
          minLength='6'
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button
          type={BUTTON_TYPE_CLASSES.google}
          disabled={disableSubmit}
          value='Submit'
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
