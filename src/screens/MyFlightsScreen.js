import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/MyFlightsScreen';
import FlightsList from '../components/molecules/FlightsList';
import ActionButton from '../components/atoms/ActionButton';
import GenericNavbarButtons from '../components/atoms/GenericNavbarButtons';
import AuthStack from '../store/AuthStack';

AuthStack.init();

const SetNavButtons = async navigation => {
  navigation.setOptions({
    headerRight: () => {
      return (
        <GenericNavbarButtons
          onPress={async () => {
            AuthStack.logOut().then(() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'loginscreen'}],
              });
            });
          }}
        />
      );
    },
  });
};

const MyFlightsScreen = ({route, navigation}) => {
  useEffect(() => {
    SetNavButtons(navigation);
  }, []);
  return (
    <View style={styles.loginScreenContainer}>
      <ActionButton onPress={() => {}} iconName="add" />
      <Text style={styles.topHeader}>My flights</Text>
      <FlightsList />
    </View>
  );
};

export default MyFlightsScreen;
