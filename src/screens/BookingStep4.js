import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BookingStep4Form from '../components/organisms/BookingStep4Form';
import FlightLocations from '../components/molecules/FlightLocations';
import styles from '../styles/BookingStep1';
import BookingLocations from '../utils/BookingLocationsUtils';

const BookingStep4 = ({route, navigation}) => {
  const fromRow = BookingLocations.Find(route.params.from.toString());
  const toRow = BookingLocations.Find(route.params.to.toString());
  return (
    <View style={styles.container}>
      <FlightLocations
        from={{shortname: fromRow.countryCode, longname: fromRow.name}}
        to={{shortname: toRow.countryCode, longname: toRow.name}} date={route.params.date}
      />
      <View style={styles.headerContainer}>
        <Text h2>How many passengers?</Text>
      </View>
      <BookingStep4Form navigation={navigation} route={route} />
    </View>
  );
};

export default BookingStep4;
