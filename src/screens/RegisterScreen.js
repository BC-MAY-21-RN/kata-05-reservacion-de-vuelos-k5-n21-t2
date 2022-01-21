import React from 'react';
import SignForm from '../components/organisms/SignForm';
import useRegister from '../hooks/useRegister';
import AuthStack from '../store/AuthStack';

AuthStack.init();

const SignupScreen = ({navigation}) => {
  const [form, setForm] = useRegister();

  return (
    <SignForm
      type="signup"
      toSectionMessage={{
        text: 'Already have an account?',
        link: 'Sign in',
        nextSection: 'loginscreen',
        navigation: navigation,
      }}
      formHook={{form, setForm}}
      AuthStack={AuthStack}
      handleLogin={AuthStack.handleRegister()}
      onGoogleButtonPress={AuthStack.getGoogleButtonPress()}
    />
  );
};

export default SignupScreen;
