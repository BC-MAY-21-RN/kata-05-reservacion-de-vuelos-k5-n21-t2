import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const storePersistValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    Alert.alert('Error', 'Ha ocurrido con el almacenamiento persistente');
  }
};

const readPersistValue = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    Alert.alert('Error', 'Ha ocurrido con el almacenamiento persistente');
    return null;
  }
};

const removePersistValue = async key => {
  try {
    AsyncStorage.removeItem(key);
  } catch (e) {
    Alert.alert('Error', 'Ha ocurrido con el almacenamiento persistente');
  }
};

const PersistentStorage = {
  set: storePersistValue,
  get: readPersistValue,
  remove: removePersistValue,
};

export default PersistentStorage;
