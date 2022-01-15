import {Alert} from 'react-native';

const handleFoo = (auth, type, email, password) => {
  if (type === 'login') {
    return auth().signInWithEmailAndPassword(email, password);
  } else if (type === 'register') {
    return auth().createUserWithEmailAndPassword(email, password);
  }
};

const handleThen = (promise, navigation) => {
  promise
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'myflights'}],
      });
    })
    .catch(error => {
      Alert.alert('Error', 'Invalid email or password.');
    });
};

const HandleGoogleSign = (auth, type, navigation) => {
  return (email, password) => {
    handleThen(handleFoo(auth, type, email, password), navigation);
  };
};

export default HandleGoogleSign;
