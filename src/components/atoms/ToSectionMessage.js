import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import style from '../../styles/ToSectionMessage';

export const ToSectionMessage = ({text, link}) => {
  const goToTargetScreen = () => {
    Alert.alert('Hey', 'to another section');
  };

  return (
    <View style={style.toLoginMessage}>
      <Text style={style.smallGrayText}>{text} </Text>
      <Pressable onPress={goToTargetScreen}>
        <Text style={style.smallBlueText}>{link}</Text>
      </Pressable>
    </View>
  );
};
