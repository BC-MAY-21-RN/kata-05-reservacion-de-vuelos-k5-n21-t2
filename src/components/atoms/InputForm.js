import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../styles/InputForm';
export const InputValidation = {
  email: {
    required: true,
    min: 5,
    max: 25,
    not: true,
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  },
  password: {
    required: true,
    min: 20,
    max: 50,
  },
};

const LOG = {
  error: {
    empty: 'Empty field',
    min: 'Its too short',
    max: 'Its too long',
    regex: 'Doesnt match the format',
  },
};

const initError = (isOk, visible, message) => {
  const defaultVisible = false;
  const defaultMessage = 'error foo foo';
  const defaultIsOk = false;
  return {
    isOk: isOk || defaultIsOk,
    visible: visible || defaultVisible,
    message: message || defaultMessage,
  };
};

const checkRegex = (text, validation) => {
  if (validation.regex === undefined) {
    return false;
  } else if (
    validation.not
      ? !text.match(validation.regex)
      : text.match(validation.regex)
  ) {
    return true;
  }
  return false;
};

const isEmpty = (text, validation) => {
  return validation.required && text === '';
};

const TriggerValidation = (text, setError, validation) => {
  if (isEmpty(text, validation) || text === undefined) {
    setError(initError(false, true, LOG.error.empty));
  } else if (text.length < validation.min) {
    setError(initError(false, true, LOG.error.min));
  } else if (text.length > validation.max) {
    setError(initError(false, true, LOG.error.max));
  } else if (checkRegex(text, validation)) {
    setError(initError(false, true, LOG.error.regex));
  } else {
    setError(initError(true, false));
  }
};

export const InputForm = ({label, footer, validation, formHook}) => {
  const [textField, setTextField] = useState();
  const [error, setError] = useState(initError());
  const labelLower = label.toLowerCase();
  useEffect(() => formHook.setForm(labelLower, textField, error.isOk), [error]);
  return (
    <View style={style.inputFormContainer}>
      <View style={style.inputLabelContainer}>
        <Text style={style.inputLabel}>{label}</Text>
        {error.visible ? (
          <Text style={style.inputError}>*{error.message}</Text>
        ) : null}
      </View>
      <Input
        onChangeText={text => {
          setTextField(text);
          TriggerValidation(text, setError, validation);
        }}
        inputStyle={style.input}
        containerStyle={style.inputContainer}
        inputContainerStyle={style.inputContainerStyle}
        rightIcon={<Icon name="eye-outline" size={24} />}
      />
      <Text
        style={[style.inputFooter, footer === undefined ? style.hidden : null]}>
        {footer}
      </Text>
    </View>
  );
};
