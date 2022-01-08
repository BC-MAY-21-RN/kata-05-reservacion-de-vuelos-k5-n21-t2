import React from 'react';
import SignForm from '../components/organisms/SignForm';

const SignupScreen = () => {
  return (
    <SignForm
      type="signup"
      toSectionMessage={{
        text: 'Already have an account?',
        link: 'Sign in',
      }}
    />
  );
};

export default SignupScreen;
