import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BookingStep1Form from '../components/organisms/BookingStep1Form';
import styles from '../styles/BookingStep1';

const BookingStep1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text h2 style={styles.header}>
          Where are you now?
        </Text>
      </View>
      <BookingStep1Form />
    </View>
  );
};

export default BookingStep1;
