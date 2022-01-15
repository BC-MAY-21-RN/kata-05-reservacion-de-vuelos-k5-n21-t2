import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/ActionButton';

const ActionButton = ({onPress, iconName}) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Icon style={styles.icon} name={iconName} type="ionicon" color="white" />
    </Pressable>
  );
};

export default ActionButton;
