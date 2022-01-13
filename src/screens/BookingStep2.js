import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BookingLocationsForm from '../components/organisms/BookingLocationsForm';
import FlightLocations from '../components/molecules/FlightLocations';
import styles from '../styles/BookingStep1';
const BookingLocations = require('../utils/datasets/BookingLocations.json');

const BookingStep2 = ({route, navigation}) => {
  const fromRow = BookingLocations.find(
    e => e.id.toString() === route.params.from.toString(),
  );
  return (
    <View style={styles.container}>
      <FlightLocations
        from={{shortname: fromRow.countryCode, longname: fromRow.name}}
      />
      <View style={styles.headerContainer}>
        <Text h2>Where will you be flying to?</Text>
      </View>
      <BookingLocationsForm
        navigation={navigation}
        route={route}
        nextSection="bookingstep3"
      />
    </View>
  );
};

export default BookingStep2;
