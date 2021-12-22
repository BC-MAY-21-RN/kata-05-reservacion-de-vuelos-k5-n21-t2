import React, {useState} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {ToOtherFormMessage} from '../components/atoms';
import {LogInFields, AlternatedSignIn} from '../components/molecules';
import {Overlay} from 'react-native-elements';
import {styles, CustomOverlayStyle} from '../styles';
import Theme from '../theme/light';

const LoginScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollView style={styles.loginScreenContainer}>
      <LogInFields />
      <AlternatedSignIn
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title="Log in with Google"
      />
      <ToOtherFormMessage message="Not have an account?" action="Sign up!"/>
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
