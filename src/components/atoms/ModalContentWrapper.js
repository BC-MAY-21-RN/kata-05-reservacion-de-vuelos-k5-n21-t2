import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../styles/ModalContentWrapper';

export const ModalContentWrapper = ({children, text}) => {
  return (
    <View style={style.modalContainer}>
      <View style={style.modalContentContainer}>
        <ActivityIndicator size="large" color="#000fff" />
      </View>
    </View>
  );
};
