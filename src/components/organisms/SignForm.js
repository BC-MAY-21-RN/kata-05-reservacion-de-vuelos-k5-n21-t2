import React, {useState} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {ToSectionMessage} from '../atoms';
import {LogInFields, SignUpFields, AlternatedSignIn} from '../molecules';
import {Overlay} from 'react-native-elements';
import {styles, CustomOverlayStyle} from '../../styles';
import Theme from '../../theme/light';

const SignFields = ({type, formHook, handleLogin, values}) => {
  return type === 'signin' ? (
    <LogInFields
      formHook={formHook}
      handleLogin={handleLogin}
      values={values}
    />
  ) : (
    <SignUpFields
      formHook={formHook}
      handleLogin={handleLogin}
      values={values}
    />
  );
};

const SignForm = ({
  type,
  toSectionMessage,
  formHook,
  handleLogin,
  onGoogleButtonPress,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollView style={styles.signScreenContainer}>
      <SignFields
        type={type}
        formHook={formHook}
        handleLogin={handleLogin}
        values={formHook.form}
      />
      <AlternatedSignIn
        formHook={formHook}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title={type === 'signup' ? 'Sign up with Google' : 'Log in with Google'}
        onGoogleButtonPress={onGoogleButtonPress}
      />
      <ToSectionMessage
        text={toSectionMessage.text}
        link={toSectionMessage.link}
        nextSection={toSectionMessage.nextSection}
        navigation={toSectionMessage.navigation}
      />
      <Overlay
        overlayStyle={CustomOverlayStyle.ModalContainer}
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(!isVisible)}>
        <ActivityIndicator size={64} color="#5566dd" />
        <Text color={Theme.Colors.primaryColor}>
          {type === 'signup' ? 'Signin up...' : 'Loging...'}
        </Text>
      </Overlay>
    </ScrollView>
  );
};

export default SignForm;
