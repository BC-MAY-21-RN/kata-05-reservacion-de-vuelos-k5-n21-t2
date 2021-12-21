import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/MyFlightsScreen';
import FlightsList from '../components/molecules/FlightsList';
import ActionButton from '../components/atoms/ActionButton';

const LoginScreen = () => {
  return (
    <View style={styles.loginScreenContainer}>
      <ActionButton onPress={() => {}} iconName="add" />
      <Text style={styles.topHeader}>My flights</Text>
      <FlightsList />
    </View>
  );
};

export default LoginScreen;
