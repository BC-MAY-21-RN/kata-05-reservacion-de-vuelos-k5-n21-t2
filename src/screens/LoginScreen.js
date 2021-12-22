import React from 'react';
import SignForm from '../components/organisms/SignForm';

const LoginScreen = () => {
  return (
    <SignForm
      type="signin"
      alternatedSignText="Log in with Google"
      toSectionMessage={{
        text: 'Not have an account?',
        link: 'Sign up',
      }}
      loading={{
        text: 'Signing in',
      }}
    />
  );
};

export default LoginScreen;
