import React from 'react';
import SignForm from '../components/organisms/SignForm';
import useLogin from '../hooks/useLogin';

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
    />
  );
};

export default LoginScreen;
