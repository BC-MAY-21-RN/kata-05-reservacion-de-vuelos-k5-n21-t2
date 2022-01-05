import React, {useState} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {ToSectionMessage} from '../atoms';
import {LogInFields, SignUpFields, AlternatedSignIn} from '../molecules';
import {Overlay} from 'react-native-elements';
import {styles, CustomOverlayStyle} from '../../styles';
import Theme from '../../theme/light';

const SignFields = ({type, setForm}) => {
  return type === 'signin' ? <LogInFields setForm={setForm} /> : <SignUpFields setForm={setForm} />;
};

const SignForm = ({type, toSectionMessage, setForm}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollView style={styles.signScreenContainer}>
      <SignFields type={type} setForm={setForm}/>
      <AlternatedSignIn
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title={type === 'signup' ? 'Sign up with Google' : 'Log in with Google'}
      />
      <ToSectionMessage
        text={toSectionMessage.text}
        link={toSectionMessage.link}
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
