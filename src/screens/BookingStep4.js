import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BookingStep4Form from '../components/organisms/BookingStep4Form';
import FlightLocations from '../components/molecules/FlightLocations';
import styles from '../styles/BookingStep1';

const BookingStep4 = () => {
  return (
    <View style={styles.container}>
      <FlightLocations
        from={{shortname: 'BEG', longname: 'Serbia'}}
        to={{shortname: 'AMS', longname: 'Netherlands'}}
        date="September 3, 2020"
      />
      <View style={styles.headerContainer}>
        <Text h2>How many passengers?</Text>
      </View>
      <BookingStep4Form />
    </View>
  );
};

export default BookingStep4;
