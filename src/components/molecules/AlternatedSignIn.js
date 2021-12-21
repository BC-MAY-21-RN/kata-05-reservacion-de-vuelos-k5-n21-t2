import React from 'react';
import {View, Text} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import {styles, CustomButtonStyle} from '../../styles';

export const AlternatedSignIn = ({isVisible, setIsVisible}) => {
  return (
    <View>
      <Text style={styles.alternateSignSeparator}>or</Text>
      <SocialIcon
        title="Sign up with Google"
        button
        onPress={() => {
          setIsVisible(!isVisible);
        }}
        type="google"
        style={CustomButtonStyle.customButton}
      />
    </View>
  );
};
