import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {InputForm, TermsCheck, ToLoginMessage} from '../components/atoms';
import {SocialIcon, Overlay, Button} from 'react-native-elements';

const LoginScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ScrollView style={styles.LoginScreenContainer}>
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
      <Button title="Sign up" buttonStyle={styles.PrimaryColor} />
      <Text style={styles.alternateSignSeparator}>or</Text>
      <SocialIcon
        title="Sign up with Google"
        button
        onPress={() => {
          setIsVisible(!isVisible);
        }}
        type="google"
        style={styles.PrimaryColor}
      />
      <ToLoginMessage />
      <Overlay
        overlayStyle={styles.ModalContainer}
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(!isVisible)}>
        <ActivityIndicator size={64} color="#5566dd" />
        <Text style={{color: '#5566dd'}}>Signing up</Text>
      </Overlay>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ModalContainer: {
    width: '25%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(50, 50, 50)',
  },
  PrimaryColor: {
    backgroundColor: '#5566dd',
    borderRadius: 15,
    alignSelf: 'center',
    margin: 0,
    width: '80%',
    height: 50,
  },
  DisabledColor: {
    backgroundColor: '#cccccc',
  },
  LoginScreenContainer: {
    padding: 20,
    flex: 1,
  },
  hidden: {
    opacity: 0,
    height: 0,
    width: 0,
    maegin: 0,
    padding: 0,
  },
  formHeader: {
    color: '#5566dd',
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  alternateSignSeparator: {
    paddingBottom: 10,
    textAlign: 'center',
  },
  checkboxContainer: {
    paddingVertical: 20,
  },
});

export default LoginScreen;
