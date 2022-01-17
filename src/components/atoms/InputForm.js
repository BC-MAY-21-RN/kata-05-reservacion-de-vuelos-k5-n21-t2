import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
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
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  },
  password: {
    required: true,
    min: 8,
    max: 50,
  },
  name: {
    required: true,
    min: 8,
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
  return validation.required && (text === '' || text === undefined);
};

const TriggerValidation = (text, setError, validation) => {
  if (isEmpty(text, validation)) {
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

export const InputForm = ({password, label, footer, validation, formHook}) => {
  const [textField, setTextField] = useState();
  const [error, setError] = useState(initError());
  const [showText, setShowText] = useState(true);
  const labelLower = label.toLowerCase();
  const rightIcon =
    password !== undefined ? (
      <Pressable onPress={() => setShowText(!showText)}>
        <Icon name={showText ? 'eye-outline' : 'eye-off-outline'} size={24} />
      </Pressable>
    ) : null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        secureTextEntry={password !== undefined ? showText : false}
        onChangeText={text => {
          setTextField(text);
          TriggerValidation(text, setError, validation);
        }}
        inputStyle={style.input}
        containerStyle={style.inputContainer}
        inputContainerStyle={style.inputContainerStyle}
        rightIcon={rightIcon}
      />
      <Text
        style={[style.inputFooter, footer === undefined ? style.hidden : null]}>
        {footer}
      </Text>
    </View>
  );
};
