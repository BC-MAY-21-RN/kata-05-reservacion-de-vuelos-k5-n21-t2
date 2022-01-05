import React from 'react';
import SignForm from '../components/organisms/SignForm';
import useLogin from '../hooks/useLogin';
import auth from '@react-native-firebase/auth';

const handleLogin = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signed in');
    })
    .catch(error => {
      console.log(error);
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
      setForm={setForm}
      handleLogin={handleLogin}
      values={form}
    />
  );
};

export default LoginScreen;
