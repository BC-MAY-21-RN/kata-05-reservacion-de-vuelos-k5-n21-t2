import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BookingLocationsForm from '../components/organisms/BookingLocationsForm';
import FlightLocations from '../components/molecules/FlightLocations';
import styles from '../styles/BookingStep1';

const BookingStep2 = () => {
  return (
    <View style={styles.container}>
      <FlightLocations from={{shortname: 'BEG', longname: 'Serbia'}}/>
      <View style={styles.headerContainer}>
        <Text h2>Where will you be flying to?</Text>
      </View>
      <BookingLocationsForm />
    </View>
  );
};

export default BookingStep2;
