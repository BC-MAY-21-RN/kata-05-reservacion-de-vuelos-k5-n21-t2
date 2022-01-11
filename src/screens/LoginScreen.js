import React from 'react';
import {Alert} from 'react-native';
import SignForm from '../components/organisms/SignForm';
import useLogin from '../hooks/useLogin';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {onGoogleButtonPress} from '../store/AuthStack';

GoogleSignin.configure({
  webClientId:
    '1005940255457-sc10mqe7t0n6h4phh13cvnf076pbjrpn.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}
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
  auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user);
    }
  });

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
      onGoogleButtonPress={onGoogleButtonPress}
    />
  );
};

export default LoginScreen;
