import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/BookingStep1';
import BookingLocations from '../../utils/BookingLocationsUtils';
import FlightLocations from './FlightLocations';

const BookingWrapper = ({children, data}) => {
  const fromRow = BookingLocations.Find(data.from.toString());
  const toRow = BookingLocations.Find(data.to.toString());
  return (
    <View style={styles.container}>
      <FlightLocations
        from={{shortname: fromRow.countryCode, longname: fromRow.name}}
        to={{shortname: toRow.countryCode, longname: toRow.name}}
        date={data.date}
        passengers={data.passengers}
      />
      {children}
    </View>
  );
};

export default BookingWrapper