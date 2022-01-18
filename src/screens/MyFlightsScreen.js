import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/MyFlightsScreen';
import FlightsList from '../components/molecules/FlightsList';
import ActionButton from '../components/atoms/ActionButton';
import GenericNavbarButtons from '../components/atoms/GenericNavbarButtons';
import AuthStack from '../store/AuthStack';
import firestore from '@react-native-firebase/firestore';
import BookingLocationsUtils from '../utils/BookingLocationsUtils';

AuthStack.init();

const getFlights = setFlights => {
  let fligts = [];
  firestore()
    .collection('users')
    .doc(AuthStack.auth().currentUser.uid)
    .collection('flights')
    .get()
    .then(data => {
      data.docs.map(doc => {
        const countryFrom = BookingLocationsUtils.Find(
          doc.data().from.toString(),
        );
        const countryTo = BookingLocationsUtils.Find(doc.data().to.toString());
        let item = {};
        item.id = doc.id;
        item.date = doc.data().date;
        item.passengers = doc.data().passengers;
        item.from = {};
        item.from.longname = countryFrom.name;
        item.from.shortname = countryFrom.countryCode;
        item.to = {};
        item.to.longname = countryTo.name;
        item.to.shortname = countryTo.countryCode;
        fligts.push(item);
      });
      setFlights(fligts);
    });
};

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
  const [flights, setFlights] = useState();

  useEffect(() => {
    SetNavButtons(navigation);
    getFlights(setFlights);
  }, []);

  return (
    <View style={styles.loginScreenContainer}>
      <ActionButton
        onPress={() => navigation.navigate('bookingstep1')}
        iconName="add"
      />
      <Text style={styles.topHeader}>My flights</Text>
      <FlightsList flights={flights} />
    </View>
  );
};

export default MyFlightsScreen;
