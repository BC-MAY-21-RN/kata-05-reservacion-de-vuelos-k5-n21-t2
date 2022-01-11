import {useState, useEffect} from 'react';

const allIsOk = (email, password, name) => {
  return email.isOk && password.isOk && name.isOk;
};

const useRegister = () => {
  const [email, setEmail] = useState({value: '', isOk: false});
  const [password, setPassword] = useState({value: '', isOk: false});
  const [name, setName] = useState({value: '', isOk: true});
  const [submit, setSubmit] = useState(true);
  useEffect(
    () => setSubmit(!allIsOk(email, password, name)),
    [email, password, name],
  );
  const setState = (action, value, isOk) => {
    if (action === 'email') setEmail({value, isOk});
    else if (action === 'password') setPassword({value, isOk});
    else if (action === 'name') setName({value, isOk});
  };

  return [{email, password, submit}, setState];
};

export default useRegister;
