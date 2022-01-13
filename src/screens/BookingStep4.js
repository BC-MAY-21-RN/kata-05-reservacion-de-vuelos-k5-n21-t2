import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import BookingStep4Form from '../components/organisms/BookingStep4Form';
import styles from '../styles/BookingStep1';
import BookingWrapper from '../components/molecules/BookingWrapper';

const BookingStep4 = ({route, navigation}) => {
  return (
    <BookingWrapper data={route.params}>
      <View style={styles.headerContainer}>
        <Text h2>How many passengers?</Text>
      </View>
      <BookingStep4Form navigation={navigation} route={route} />
    </BookingWrapper>
  );
};

export default BookingStep4;
