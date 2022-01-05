import {useState} from 'react';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setState = (action, value) => {
    if (action === 'email') setEmail(value);
    if (action === 'password') setPassword(value);
  };

  return [{email, password}, setState];
};

export default useLogin;
