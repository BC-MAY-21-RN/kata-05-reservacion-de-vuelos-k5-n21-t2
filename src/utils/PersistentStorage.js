import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storePersistValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    Alert.alert('Error', 'Ha ocurrido un problema al guardar tus datos');
  }
};

export const readPersistValue = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    Alert.alert('Error', 'Ha ocurrido un problema al leer tus datos');
    return null;
  }
};
