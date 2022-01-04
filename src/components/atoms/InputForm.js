import React from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../styles/InputForm';

export const InputForm = ({label, footer}) => {
  const errorMsg = 'error foo foo';
  return (
    <View style={style.inputFormContainer}>
      <View style={style.inputLabelContainer}>
        <Text style={style.inputLabel}>{label}</Text>
        <Text style={style.inputError}>*{errorMsg}</Text>
      </View>
      <Input
        inputStyle={style.input}
        containerStyle={style.inputContainer}
        inputContainerStyle={style.inputContainerStyle}
        rightIcon={<Icon name="eye-outline" size={24} />}
      />
      <Text
        style={[style.inputFooter, footer === undefined ? style.hidden : null]}>
        {footer}
      </Text>
    </View>
  );
};
