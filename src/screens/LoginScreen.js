import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import SignForm from '../components/organisms/SignForm';
import useLogin from '../hooks/useLogin';
import auth from '@react-native-firebase/auth';

const handleLogin = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert('Good', 'good');
    })
    .catch(() => {
      Alert.alert('Error', 'Invalid email or password.');
    });
};

const LoginScreen = () => {
  const [form, setForm] = useLogin();

  return (
    <SignForm
      type="signin"
      toSectionMessage={{
        text: 'Not have an account?',
        link: 'Sign up',
      }}
      formHook={{form, setForm}}
      form={form}
      handleLogin={handleLogin}
      values={form}
    />
  );
};

export default LoginScreen;
