import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {ToSectionMessage} from '../atoms';
import {LogInFields, SignUpFields, AlternatedSignIn} from '../molecules';
import {styles} from '../../styles';
import SignLoading from '../atoms/SignLoading';

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
  AuthStack,
}) => {
  const [signLoading, setSignLoading] = useState({loading: false, done: false});
  AuthStack.setSignLoading(setSignLoading);
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
        title={type === 'signup' ? 'Sign up with Google' : 'Log in with Google'}
        onGoogleButtonPress={onGoogleButtonPress}
      />
      <ToSectionMessage
        text={toSectionMessage.text}
        link={toSectionMessage.link}
        nextSection={toSectionMessage.nextSection}
        navigation={toSectionMessage.navigation}
      />
      <SignLoading state={signLoading} type={type} />
    </ScrollView>
  );
};

export default SignForm;
