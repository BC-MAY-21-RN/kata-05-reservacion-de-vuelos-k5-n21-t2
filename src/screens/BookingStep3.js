import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BookingStep3Form from '../components/organisms/BookingStep3Form';
import FlightLocations from '../components/molecules/FlightLocations';
import styles from '../styles/BookingStep1';

const BookingStep3 = () => {
  return (
    <View style={styles.container}>
      <FlightLocations
        from={{shortname: 'BEG', longname: 'Serbia'}}
        to={{shortname: 'AMS', longname: 'Netherlands'}}
      />
      <View style={styles.headerContainer}>
        <Text h2>Select date</Text>
      </View>
      <BookingStep3Form />
    </View>
  );
};

export default BookingStep3;
