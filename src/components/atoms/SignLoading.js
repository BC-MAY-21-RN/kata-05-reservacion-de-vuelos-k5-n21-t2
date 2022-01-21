import React, {useState} from 'react';
import {Overlay} from 'react-native-elements/dist/overlay/Overlay';
import {ActivityIndicator, Text} from 'react-native';
import {styles, CustomOverlayStyle} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';

const SignLoading = ({state, type}) => {
  const [loading, setLoading] = useState(state.loading);
  return (
    <Overlay
      overlayStyle={CustomOverlayStyle.ModalContainer}
      isVisible={state.loading}
      onBackdropPress={() => setLoading(!loading)}>
      {state.done ? (
        <Icon style={styles.loadingIcon} size={68} name="checkmark-circle-outline" />
      ) : (
        <ActivityIndicator size={64} color="#5566dd" />
      )}
      <Text style={styles.loadingText}>
        {type === 'signup'
          ? state.done
            ? 'Signed up'
            : 'Signin up...'
          : state.done
          ? 'Signed in'
          : 'Signing in'}
      </Text>
    </Overlay>
  );
};

export default SignLoading;
