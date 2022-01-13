import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import FlightLocations from '../components/molecules/FlightLocations';
import styles from '../styles/BookingStep1';
import {CustomButtonStyle} from '../styles/CustomButton';
const BookingLocations = require('../utils/datasets/BookingLocations.json');

const doSaveOnFirebase = () => {
  console.log('save info in firebase');
};

const BookingStep5 = ({route, navigation}) => {
  console.log(route.params);
  const fromRow = BookingLocations.find(
    e => e.id.toString() === route.params.from.toString(),
  );
  const toRow = BookingLocations.find(
    e => e.id.toString() === route.params.to.toString(),
  );
  return (
    <View style={styles.container}>
      <View style={styles.locationsContainer}>
        <FlightLocations
          from={{shortname: 'BEG', longname: 'Serbia'}}
          to={{shortname: 'AMS', longname: 'Netherlands'}}
          date="September 3, 2020"
        />
      </View>
      <View style={styles.headerContainer}>
        <Text h2>Your request was received</Text>
      </View>
      <View style={styles.submitContainer}>
        <Button
          style={styles.submit}
          title="Finish"
          onPress={() => {
            doSaveOnFirebase();
          }}
          buttonStyle={CustomButtonStyle.customButton}
        />
      </View>
    </View>
  );
};

export default BookingStep5;
