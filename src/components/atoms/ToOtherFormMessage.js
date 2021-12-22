import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import style from '../../styles/ToLoginMessage';

export const ToOtherFormMessage = ({message,action}) => {
  const goToSignInScreen = () => {
    Alert.alert('Hey', 'goToOtherScreen');
  };

  return (
    <View style={style.toLoginMessage}>
      <Text style={style.smallGrayText}>{message} </Text>
      <Pressable onPress={goToSignInScreen}>
        <Text style={style.smallBlueText}>{action}]</Text>
      </Pressable>
    </View>
  );
};