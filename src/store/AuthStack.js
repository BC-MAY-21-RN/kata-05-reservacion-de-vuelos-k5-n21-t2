import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

let setSignLoading = null;

const handleThen = (promise, setSignLoading) => {
  setSignLoading({loading: true, done: false});
  promise
    .then(() => {
      setSignLoading({loading: true, done: true});
      setTimeout(() => setSignLoading({loading: false, done: false}), 1000);
    })
    .catch(error => {
      setSignLoading({loading: false, done: false});
      switch (error.code) {
        case 'auth/user-not-found':
          Alert.alert('Error', 'Incorrect email nor password.');
          break;
        case 'auth/email-already-in-use':
          Alert.alert('Error', 'Email already in use.');
          break;
        case 'auth/invalid-email':
          Alert.alert('Error', 'Invalid email.');
          break;
      }
    });
};

const signDecorator = (func, setSignLoading) => {
  return (email, password) => {
    handleThen(func(email, password), setSignLoading);
  };
};

const AuthStack = {
  auth,
  setSignLoading: value => {
    setSignLoading = value;
  },
  init: () => {
    GoogleSignin.configure({
      webClientId:
        '1005940255457-sc10mqe7t0n6h4phh13cvnf076pbjrpn.apps.googleusercontent.com',
    });
  },
  logOut: () => {
    return Promise.all([auth().signOut(), GoogleSignin.signOut()]);
  },
  getGoogleButtonPress: () => {
    return async function onGoogleButtonPress() {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    };
  },
  handleLogin: () => {
    return signDecorator(
      (email, password) => auth().signInWithEmailAndPassword(email, password),
      setSignLoading,
    );
  },
  handleRegister: () => {
    return signDecorator(
      (email, password) =>
        auth().createUserWithEmailAndPassword(email, password),
      setSignLoading,
    );
  },
};

export default AuthStack;
