import React from 'react';
import SignForm from '../components/organisms/SignForm';

const LoginScreen = () => {
  return (
    <SignForm
      type="signin"
      toSectionMessage={{
        text: 'Not have an account?',
        link: 'Sign up',
      }}
    />
  );
};

export default LoginScreen;
