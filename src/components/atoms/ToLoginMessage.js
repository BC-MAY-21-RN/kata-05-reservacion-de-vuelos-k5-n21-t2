import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from '../../styles/ToLoginMessage';

export const ToLoginMessage = () => {
  const goToLoginScreen = () => {
    console.log('to login screen');
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
