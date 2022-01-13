import React from 'react';
import {Alert} from 'react-native';
import SignForm from '../components/organisms/SignForm';
import useRegister from '../hooks/useRegister';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthStack} from '../store/AuthStack';

const onGoogleButtonPress = AuthStack(auth, GoogleSignin);

const handleRegister = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert('Good', 'good');
    })
    .catch(() => {
      Alert.alert('Error', 'Invalid email or password.');
    });
};

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
      handleLogin={handleRegister}
      values={form}
      onGoogleButtonPress={onGoogleButtonPress}
    />
  );
};

export default SignupScreen;
