import {Alert} from 'react-native';

const handleFoo = (auth, type, email, password) => {
  if (type === 'login') {
    return auth().signInWithEmailAndPassword(email, password);
  } else if (type === 'register') {
    return auth().createUserWithEmailAndPassword(email, password);
  }
};

const handleThen = promise => {
  promise
    .then(() => {
      Alert.alert('Good', 'good');
    })
    .catch(() => {
      Alert.alert('Error', 'Invalid email or password.');
    });
};

const HandleGoogleSign = (auth, type) => {
  return (email, password) => {
    handleThen(handleFoo(auth, type, email, password));
  };
};

export default HandleGoogleSign;
