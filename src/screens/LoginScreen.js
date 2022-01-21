import React, {useEffect} from 'react';
import SignForm from '../components/organisms/SignForm';
import useLogin from '../hooks/useLogin';
import AuthStack from '../store/AuthStack';

AuthStack.init();
let mounted = false;

const LoginScreen = ({navigation}) => {
  const [form, setForm] = useLogin();

  useEffect(() => {
    let auth = AuthStack.auth().onAuthStateChanged(user => {
      if (user) {
        if (!mounted) {
          mounted = true;
          setTimeout(() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'myflights'}],
            });
          }, 1100);
        }
      } else {
        mounted = false;
      }
    });
    return auth;
  }, [navigation]);

  return (
    <>
      <SignForm
        type="signin"
        toSectionMessage={{
          text: 'Not have an account?',
          link: 'Sign up',
          nextSection: 'registerscreen',
          navigation: navigation,
        }}
        formHook={{form, setForm}}
        AuthStack={AuthStack}
        handleLogin={AuthStack.handleLogin()}
        onGoogleButtonPress={AuthStack.getGoogleButtonPress()}
      />
    </>
  );
};

export default LoginScreen;
