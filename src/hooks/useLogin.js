import {useState, useEffect} from 'react';

const allIsOk = (email, password) => {
  return email.isOk && password.isOk;
};

const useLogin = () => {
  const [email, setEmail] = useState({value: '', isOk: false});
  const [password, setPassword] = useState({value: '', isOk: false});
  const [submit, setSubmit] = useState(true);
  useEffect(() => setSubmit(!allIsOk(email, password)), [email, password]);
  const setState = (action, value, isOk) => {
    if (action === 'email') setEmail({value, isOk});
    else if (action === 'password') setPassword({value, isOk});
  };

  return [{email, password, submit}, setState];
};

export default useLogin;
