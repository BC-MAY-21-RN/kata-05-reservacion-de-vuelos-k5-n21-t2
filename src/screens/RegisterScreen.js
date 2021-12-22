import React, {useState} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {ToOtherFormMessage} from '../components/atoms';
import {SignUpFields, AlternatedSignIn} from '../components/molecules';
import {Overlay} from 'react-native-elements';
import {styles, CustomOverlayStyle} from '../styles';
import Theme from '../theme/light';

const SignupScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollView style={styles.loginScreenContainer}>
      <SignUpFields />
      <AlternatedSignIn
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title="Sign up with Google"
      />
      <ToOtherFormMessage message="Alrady have an account?" action="Log in!"/>
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

export default SignupScreen;