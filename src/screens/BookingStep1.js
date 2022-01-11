import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BookingLocationsForm from '../components/organisms/BookingLocationsForm';
import styles from '../styles/BookingStep1';

const BookingStep1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer} />
      <View style={styles.headerContainer}>
        <Text h2 style={styles.header}>
          Where are you now?
        </Text>
      </View>
      <BookingLocationsForm />
    </View>
  );
};

export default BookingStep1;
