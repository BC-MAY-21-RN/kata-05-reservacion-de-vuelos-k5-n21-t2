import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import style from '../../styles/ToLoginMessage';

export const ToSignInMessage = () => {
  const goToSignInScreen = () => {
    Alert.alert('Hey', 'goToSignInScreen');
  };

  return (
    <View style={style.toLoginMessage}>
      <Text style={style.smallGrayText}>Not have an account? </Text>
      <Pressable onPress={goToSignInScreen}>
        <Text style={style.smallBlueText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};
