import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {styles, CustomButtonStyle} from '../../styles';
import {InputForm, InputValidation, TermsCheck} from '../atoms';

export const SignUpFields = ({formHook, handleLogin, values}) => {
  return (
    <View>
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
      <Button
        disabled={formHook.form.submit}
        title="Sign up"
        buttonStyle={CustomButtonStyle.customButton}
        onPress={() => handleLogin(values.email.value, values.password.value)}
      />
    </View>
  );
};
