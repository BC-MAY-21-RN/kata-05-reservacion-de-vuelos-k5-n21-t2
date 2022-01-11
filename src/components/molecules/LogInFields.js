import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {styles, CustomButtonStyle} from '../../styles';
import {InputForm, InputValidation, TermsCheck} from '../atoms';

export const LogInFields = () => {
  return (
    <View>
      <Text style={styles.formHeader}>Log In</Text>
      <View>
        <InputForm label="Email" validation={InputValidation.email} />
        <InputForm label="Password" validation={InputValidation.password} />
      </View>
      <View style={styles.checkboxContainer}>
        <TermsCheck title="Remember me" />
      </View>
      <Button title="Log in" buttonStyle={CustomButtonStyle.customButton} />
    </View>
  );
};
