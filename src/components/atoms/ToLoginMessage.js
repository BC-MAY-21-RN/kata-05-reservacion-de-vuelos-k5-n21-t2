import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import style from '../../styles/ToLoginMessage';

export const ToLoginMessage = () => {
  const goToLoginScreen = () => {
    Alert.alert('Hey', 'goToLoginScreen');
  };

  return (
    <View style={style.toLoginMessage}>
      <Text style={style.smallGrayText}>Already have an account? </Text>
      <Pressable onPress={goToLoginScreen}>
        <Text style={style.smallBlueText}>Log in</Text>
      </Pressable>
    </View>
  );
};
