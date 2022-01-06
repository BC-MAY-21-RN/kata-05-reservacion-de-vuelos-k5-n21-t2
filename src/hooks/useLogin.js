import {useState} from 'react';

const useLogin = () => {
  const [email, setEmail] = useState({value: '', isOk: false});
  const [password, setPassword] = useState({value: '', isOk: false});
  const [submit, setSubmit] = useState(true);
  const setState = (action, value, isOk) => {
    if (action === 'email') setEmail({value, isOk});
    if (action === 'password') setPassword({value, isOk});
    const allIsOk = email.isOk && password.isOk;
    console.log(email.isOk, password.isOk);
    setSubmit(allIsOk ? false : true);
  };

  return [{email, password, submit}, setState];
};

export default useLogin;
