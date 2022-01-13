import React from 'react';
import SignForm from '../components/organisms/SignForm';
import useRegister from '../hooks/useRegister';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthStack} from '../store/AuthStack';
import HandleGoogleSign from '../utils/GoogleHandleSign';

const onGoogleButtonPress = AuthStack(auth, GoogleSignin);

const SignupScreen = () => {
  const [form, setForm] = useRegister();

  return (
    <SignForm
      type="signup"
      toSectionMessage={{
        text: 'Already have an account?',
        link: 'Sign in',
      }}
      formHook={{form, setForm}}
      form={form}
      handleLogin={HandleGoogleSign(auth, 'register')}
      values={form}
      onGoogleButtonPress={onGoogleButtonPress}
    />
  );
};

export default SignupScreen;
