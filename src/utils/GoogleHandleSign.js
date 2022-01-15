import {Alert} from 'react-native';

const handleFoo = (auth, type, email, password) => {
  if (type === 'login') {
    return auth().signInWithEmailAndPassword(email, password);
  } else if (type === 'register') {
    return auth().createUserWithEmailAndPassword(email, password);
  }
};

const handleThen = (promise, navigation, loginValues) => {
  promise
    .then(() => {
      // navigation.reset({
      //   index: 0,
      //   name: 'myflights',
      //   params: {loginValues},
      // }).catch(error => console.log(error));
      Alert.alert('VErgaAAAAAAAA', 'Invalid email or password.');
    })
    .catch(error => {
      // console.log(error);
      Alert.alert('Error', 'Invalid email or password.');
    });
};

const HandleGoogleSign = (loginValues, type, navigation) => {
  return (email, password) => {
    handleThen(handleFoo(loginValues.auth, type, email, password), navigation, loginValues);
  };
};

export default HandleGoogleSign;
