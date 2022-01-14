import React from 'react';
import {View, Text} from 'react-native';
import {styles, CustomButtonStyle} from '../../styles';
import {InputForm, InputValidation, TermsCheck} from '../atoms';
import {Fields} from './';

export const LogInFields = ({formHook, handleLogin, values}) => {
  return (
    <Fields
      disabled={formHook.form.submit}
      title="Log in"
      buttonStyle={CustomButtonStyle.customButton}
      handleLogin={handleLogin}
      values={values}>
      <Text style={styles.formHeader}>Log In</Text>
      <View>
        <InputForm
          label="Email"
          validation={InputValidation.email}
          formHook={formHook}
        />
        <InputForm
          label="Password"
          password={true}
          validation={InputValidation.password}
          formHook={formHook}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <TermsCheck title="Remember me" />
      </View>
    </Fields>
  );
};
