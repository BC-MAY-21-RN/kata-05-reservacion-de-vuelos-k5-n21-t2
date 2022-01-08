import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {styles, CustomButtonStyle} from '../../styles';
import {InputForm, InputValidation, TermsCheck} from '../atoms';

export const LogInFields = ({formHook, handleLogin, values}) => {
  return (
    <View>
      <Text style={styles.formHeader}>Log In</Text>
      <View>
        <InputForm
          label="Email"
          validation={InputValidation.email}
          formHook={formHook}
        />
        <InputForm
          label="Password"
          validation={InputValidation.password}
          formHook={formHook}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <TermsCheck title="Remember me" />
      </View>
      <Button
        disabled={formHook.form.submit}
        title="Log in"
        buttonStyle={CustomButtonStyle.customButton}
        onPress={() => handleLogin(values.email.value, values.password.value)}
      />
    </View>
  );
};
