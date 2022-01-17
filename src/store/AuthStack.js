import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

const handleThen = promise => {
  promise.catch(error => {
    Alert.alert('Error', 'Invalid email or password.');
  });
};

const signDecorator = func => {
  return (email, password) => {
    handleThen(func(email, password));
  };
};

const AuthStack = {
  auth,
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
    return signDecorator((email, password) =>
      auth().signInWithEmailAndPassword(email, password),
    );
  },
  handleRegister: () => {
    return signDecorator((email, password) =>
      auth().createUserWithEmailAndPassword(email, password),
    );
  },
};

export default AuthStack;
