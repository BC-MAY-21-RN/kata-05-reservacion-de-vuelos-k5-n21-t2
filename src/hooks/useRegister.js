import {useState, useEffect} from 'react';

const allIsOk = (email, password, name, terms) => {
  return email.isOk && password.isOk && name.isOk && terms.isOk;
};

const useRegister = () => {
  const [email, setEmail] = useState({value: '', isOk: false});
  const [password, setPassword] = useState({value: '', isOk: false});
  const [name, setName] = useState({value: '', isOk: false});
  const [terms, setTerms] = useState({isOk: false});
  const [submit, setSubmit] = useState(true);
  useEffect(
    () => setSubmit(!allIsOk(email, password, name, terms)),
    [email, password, name, terms],
  );
  const setState = (action, value, isOk) => {
    if (action === 'email') setEmail({value, isOk});
    else if (action === 'password') setPassword({value, isOk});
    else if (action === 'name') setName({value, isOk});
    else if (action === 'terms') setTerms({isOk});
  };

  return [{email, password, name, terms, submit}, setState];
};

export default useRegister;
