import React from 'react';
import {View, Text} from 'react-native';
import {styles, CustomButtonStyle} from '../../styles';
import {InputForm, InputValidation, TermsCheck} from '../atoms';
import {Fields} from './';

export const SignUpFields = ({formHook, handleLogin, values}) => {
  return (
    <Fields
      disabled={formHook.form.submit}
      title="Sign up"
      buttonStyle={CustomButtonStyle.customButton}
      handleLogin={handleLogin}
      values={values}>
      <Text style={styles.formHeader}>Sign up</Text>
      <InputForm
        label="Name"
        validation={InputValidation.name}
        formHook={formHook}
      />
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
        footer="Use 8 or more characters with a mix of letters, numbers and symbols."
      />
      <View style={styles.checkboxContainer}>
        <TermsCheck
          title="I agree to the Terms and Privacy Policy"
          formHook={formHook}
        />
        <TermsCheck title="Subscribe for  select  product updates" />
      </View>
    </Fields>
  );
};
