import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

export const Fields = ({
  disabled,
  title,
  buttonStyle,
  handleLogin,
  values,
  children,
}) => {
  return (
    <View>
      {children}
      <Button
        disabled={disabled}
        title={title}
        buttonStyle={buttonStyle}
        onPress={() => handleLogin(values.email.value, values.password.value)}
      />
    </View>
  );
};
