import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/MyFlightsScreen';
import FlightsList from '../components/molecules/FlightsList';
import ActionButton from '../components/atoms/ActionButton';
import GenericNavbarButtons from '../components/atoms/GenericNavbarButtons';
import PersistentStorage from '../utils/PersistentStorage';
import {AuthLogOut} from '../store/AuthStack';

const MyFlightsScreen = ({route, navigation}) => {
  const {auth, GoogleSignin} = route.params.loginValues;
  // console.log(auth);
  navigation.setOptions({
    headerRight: () => {
      return (
        <GenericNavbarButtons
          onPress={async () => {
            AuthLogOut(auth, GoogleSignin);
            await PersistentStorage.remove('uid');
            navigation.navigate('loginscreen');
          }}
        />
      );
    },
  });
  return (
    <View style={styles.loginScreenContainer}>
      <ActionButton onPress={() => {}} iconName="add" />
      <Text style={styles.topHeader}>My flights</Text>
      <FlightsList />
    </View>
  );
};

export default MyFlightsScreen;
