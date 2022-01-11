import React from 'react';
import {View, Text} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import {styles, CustomButtonStyle} from '../../styles';

export const AlternatedSignIn = ({formHook, title, onGoogleButtonPress}) => {
  return (
    <View>
      <Text style={styles.alternateSignSeparator}>or</Text>
      <SocialIcon
        title={title}
        button
        onPress={onGoogleButtonPress}
        type="google"
        style={CustomButtonStyle.customButton}
      />
    </View>
  );
};
