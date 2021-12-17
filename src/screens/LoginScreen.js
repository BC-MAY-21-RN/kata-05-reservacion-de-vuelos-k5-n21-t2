import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';
import {Input, CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
//import {styles} from './styles.js';

const CustomModal = ({children, isVisible, setIsVisible}) => {
  console.log(isVisible);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        //Alert.alert('Modal has been closed.');
        setIsVisible(!isVisible);
      }}>
      {children}
    </Modal>
  );
};

const ModalContentWrapper = ({icon, text}) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContentContainer}>
        <Icon name={icon} color="#5566dd" size={128} />
        <Text style={styles.modalContentText}>{text}</Text>
      </View>
    </View>
  );
};

const InputForm = ({label, footer}) => {
  const errorMsg = 'error foo foo';
  console.log(footer === undefined, footer);

  return (
    <View style={styles.inputFormContainer}>
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        <Text style={styles.inputError}>*{errorMsg}</Text>
      </View>
      <Input
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        rightIcon={{type: 'ionicons', name: 'eye-outline'}}
      />
      <Text
        style={[
          styles.inputFooter,
          footer === undefined ? styles.hidden : null,
        ]}>
        {footer}
      </Text>
    </View>
  );
};

const TermsCheck = ({title}) => {
  const [state, setState] = useState(false);

  return (
    <CheckBox
      containerStyle={styles.checkbox}
      title={title}
      checkedColor="purple"
      checked={state.checked}
      onPress={() => setState({checked: !state.checked})}
    />
  );
};

const SignButton = ({title, onPress, alternate}) => {
  //incialmente desactivado
  const [disabled, setDisabled] = useState(true);
  onPress = () => {
    console.log('click foo');
  };

  //usariamos set state cuando todos los campos sean correctos, para dejarlo hacer click
  //mientras state === 0, no se tiene que realizar ninguna funcion onclick

  return (
    <Pressable
      style={[
        styles.signButton,
        disabled ? styles.signButtonInactive : styles.signButtonActive,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.signButtonText}>
        {alternate ? <Icon name="logo-google" size={16} /> : <></>}
        {title}
      </Text>
    </Pressable>
  );
};

const ToLoginMessage = () => {
  const goToLoginScreen = () => {
    console.log('to login screen');
  };

  return (
    <View style={styles.toLoginMessage}>
      <Text style={styles.smallGrayText}>Already have an account? </Text>
      <Pressable onPress={goToLoginScreen}>
        <Text style={styles.smallBlueText}>Log in</Text>
      </Pressable>
    </View>
  );
};

const AlternateSign = () => {
  return (
    <View>
      <Text style={styles.alternateSignSeparator}>or</Text>
      <SignButton
        title="Sign up wtih Google"
        color="#f1f1f1"
        alternate="true"
      />
    </View>
  );
};

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
      <SignButton title="Sign up" />
      <AlternateSign />
      <ToLoginMessage />
      <Pressable
        onPress={() => {
          setIsVisible(true);
        }}>
        <Text>Hey</Text>
      </Pressable>
      <CustomModal isVisible={isVisible} setIsVisible={setIsVisible}>
        <ModalContentWrapper text="Cargando..." icon="reload-circle-outline" />
      </CustomModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  inputFormContainer: {
    padding: 0,
    magin: 0,
  },
  checkbox: {
    padding: 0,
    margin: 0,
  },
  inputLabel: {
    paddingBottom: 5,
  },
  input: {
    paddingBottom: 0,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#5566dd',
    borderRadius: 5,
  },
  inputFooter: {
    color: 'gray',
  },
  alternateSignSeparator: {
    paddingBottom: 10,
    textAlign: 'center',
  },
  signButton: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  signButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 20,
  },
  signButtonInactive: {
    backgroundColor: '#bbbbbb',
  },
  signButtonActive: {
    backgroundColor: '#5566dd',
  },
  smallBlueText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  smallGrayText: {
    color: 'gray',
  },
  toLoginMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 40,
  },
  checkboxContainer: {
    paddingVertical: 20,
  },
  inputError: {
    color: 'red',
  },
  inputLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(50, 50, 50, .4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContentContainer: {
    width: 160,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(50, 50, 50)',
  },
  modalContentText: {
    color: '#5566dd',
  },
});

export default LoginScreen;
