import React from 'react';
import {View, Text} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import {styles, CustomButtonStyle} from '../../styles';

export const AlternatedSignIn = ({
  formHook,
  isVisible,
  setIsVisible,
  title,
}) => {
  return (
    <View>
      <Text style={styles.alternateSignSeparator}>or</Text>
      <SocialIcon
        disabled={formHook.form.submit}
        fontStyle={
          formHook.form.submit
            ? CustomButtonStyle.customDisabledButtonFont
            : null
        }
        iconStyle={
          formHook.form.submit
            ? CustomButtonStyle.customDisabledButtonIcon
            : null
        }
        title={title}
        button
        onPress={() => {
          setIsVisible(!isVisible);
        }}
        type="google"
        style={[
          CustomButtonStyle.customButton,
          formHook.form.submit ? CustomButtonStyle.customDisabledButton : null,
        ]}
      />
    </View>
  );
};
