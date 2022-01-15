import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GenericNavbarButtons = ({onPress}) => {
  return (
    <View style={{}}>
      <Pressable onPress={() => onPress()}>
        <Icon name="log-out-outline" size={24} />
      </Pressable>
    </View>
  );
};

export default GenericNavbarButtons;
