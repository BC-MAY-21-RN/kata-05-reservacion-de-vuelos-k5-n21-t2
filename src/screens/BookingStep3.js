import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BookingStep3Form from '../components/organisms/BookingStep3Form';
import FlightLocations from '../components/molecules/FlightLocations';
import styles from '../styles/BookingStep1';
const BookingLocations = require('../utils/datasets/BookingLocations.json');

const BookingStep3 = ({route, navigation}) => {
  const fromRow = BookingLocations.find(
    e => e.id.toString() === route.params.from.toString(),
  );
  const toRow = BookingLocations.find(
    e => e.id.toString() === route.params.to.toString(),
  );
  return (
    <View style={styles.container}>
      <FlightLocations
        from={{shortname: fromRow.countryCode, longname: fromRow.name}}
        to={{shortname: toRow.countryCode, longname: toRow.name}}
      />
      <View style={styles.headerContainer}>
        <Text h2>Select date</Text>
      </View>
      <BookingStep3Form route={route} navigation={navigation} />
    </View>
  );
};

export default BookingStep3;
