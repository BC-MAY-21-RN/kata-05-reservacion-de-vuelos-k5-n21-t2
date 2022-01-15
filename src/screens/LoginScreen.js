import React, {useEffect} from 'react';
import {Button} from 'react-native';
import SignForm from '../components/organisms/SignForm';
import useLogin from '../hooks/useLogin';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthStack} from '../store/AuthStack';
import HandleGoogleSign from '../utils/GoogleHandleSign';
import PersistentStorage from '../utils/PersistentStorage';

const onGoogleButtonPress = AuthStack(auth, GoogleSignin);
const loginValues = {auth: auth, GoogleSignin: GoogleSignin};

const checkAutoSignIn = async navigation => {
  const r = await PersistentStorage.get('uid');
  if (r !== null && r !== undefined) {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'myflights',
          params: {loginValues},
        },
      ],
    });
  }
};

const LoginScreen = ({navigation}) => {
  const [form, setForm] = useLogin();
  auth().onAuthStateChanged(user => {
    if (user) {
      PersistentStorage.set('uid', user.uid);
    }
  });

  useEffect(() => {
    //checkAutoSignIn(navigation);
  }, []);

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
        handleLogin={HandleGoogleSign(loginValues, 'login', navigation)}
        onGoogleButtonPress={onGoogleButtonPress}
      />
    </>
  );
};

export default LoginScreen;
