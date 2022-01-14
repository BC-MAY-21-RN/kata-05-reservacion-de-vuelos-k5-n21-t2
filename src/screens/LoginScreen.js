import React from 'react';
import SignForm from '../components/organisms/SignForm';
import useLogin from '../hooks/useLogin';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthStack} from '../store/AuthStack';
import HandleGoogleSign from '../utils/GoogleHandleSign';

const onGoogleButtonPress = AuthStack(auth, GoogleSignin);

const LoginScreen = () => {
  const [form, setForm] = useLogin();
  auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user);
    }
  });

  return (
    <SignForm
      type="signin"
      toSectionMessage={{
        text: 'Not have an account?',
        link: 'Sign up',
      }}
      formHook={{form, setForm}}
      handleLogin={HandleGoogleSign(auth, 'login')}
      onGoogleButtonPress={onGoogleButtonPress}
    />
  );
};

export default LoginScreen;
