import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from '../../styles/ToSectionMessage';

export const ToSectionMessage = ({text, link, nextSection, navigation}) => {
  return (
    <View style={style.toLoginMessage}>
      <Text style={style.smallGrayText}>{text} </Text>
      <Pressable
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: nextSection}],
          });
        }}>
        <Text style={style.smallBlueText}>{link}</Text>
      </Pressable>
    </View>
  );
};
