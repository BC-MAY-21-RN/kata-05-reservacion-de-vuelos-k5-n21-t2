import React from 'react';
import SignForm from '../components/organisms/SignForm';

const SignupScreen = () => {
  return (
    <SignForm
      type="signup"
      alternatedSignText="Sign up with Google"
      toSectionMessage={{
        text: 'Already have an account?',
        link: 'Sign in',
      }}
      loading={{
        text: 'Signing up',
      }}
    />
  );
};

export default SignupScreen;