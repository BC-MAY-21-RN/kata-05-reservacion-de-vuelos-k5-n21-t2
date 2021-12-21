import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {styles, CustomButtonStyle} from '../../styles';
import {InputForm, TermsCheck} from '../atoms';

export const SignUpFields = () => {
  return (
    <View>
      <Text style={styles.formHeader}>Sign up</Text>
      <InputForm label="First name" />
      <InputForm label="Email" />
      <InputForm
        label="Password"
        footer="Use 8 or more characters with a mix of letters, numbers and symbols."
      />
      <View style={styles.checkboxContainer}>
        <TermsCheck title="I agree to the Terms and Privacy Policy" />
        <TermsCheck title="Subscribe for  select  product updates" />
      </View>
      <Button title="Sign up" buttonStyle={CustomButtonStyle.customButton} />
    </View>
  );
};
