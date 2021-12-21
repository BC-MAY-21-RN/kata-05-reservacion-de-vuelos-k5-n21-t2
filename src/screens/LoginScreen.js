import React, {useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {InputForm, TermsCheck, ToLoginMessage} from '../components/atoms';
import {SocialIcon, Overlay, Button} from 'react-native-elements';
import {styles, CustomButtonStyle, CustomOverlayStyle} from '../styles';
import Theme from '../theme/light';

const LoginScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ScrollView style={styles.loginScreenContainer}>
      <Text style={styles.formHeader}>Sign up</Text>
      <View>
        <InputForm label="First name" />
        <InputForm label="Email" />
        <InputForm
          label="Password"
          footer="Use 8 or more characters with a mix of letters, numbers and symbols."
        />
      </View>
      <View style={styles.checkboxContainer}>
        <TermsCheck title="I agree to the Terms and Privacy Policy" />
        <TermsCheck title="Subscribe for  select  product updates" />
      </View>
      <Button title="Sign up" buttonStyle={CustomButtonStyle.customButton} />
      <Text style={styles.alternateSignSeparator}>or</Text>
      <SocialIcon
        title="Sign up with Google"
        button
        onPress={() => {
          setIsVisible(!isVisible);
        }}
        type="google"
        style={CustomButtonStyle.customButton}
      />
      <ToLoginMessage />
      <Overlay
        overlayStyle={CustomOverlayStyle.ModalContainer}
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(!isVisible)}>
        <ActivityIndicator size={64} color="#5566dd" />
        <Text color={Theme.Colors.primaryColor}>Signing up</Text>
      </Overlay>
    </ScrollView>
  );
};

export default LoginScreen;
