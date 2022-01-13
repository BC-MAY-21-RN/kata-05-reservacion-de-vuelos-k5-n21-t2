import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import styles from '../styles/BookingStep1';
import BookingWrapper from '../components/molecules/BookingWrapper';
import {CustomButtonStyle} from '../styles';

const doSaveOnFirebase = () => {
  console.log('save info in firebase');
};

const BookingStep5 = ({route, navigation}) => {
  console.log(route.params);
  return (
    <BookingWrapper data={route.params}>
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
    </BookingWrapper>
  );
};

export default BookingStep5;
