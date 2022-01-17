import React from 'react';
import {View, Alert} from 'react-native';
import {Text, Button} from 'react-native-elements';
import styles from '../styles/BookingStep1';
import BookingWrapper from '../components/molecules/BookingWrapper';
import {CustomButtonStyle} from '../styles';
import firestore from '@react-native-firebase/firestore';
import AuthStack from '../store/AuthStack';

const doSaveOnFirebase = ({date, from, to, passengers}, navigation) => {
  firestore()
    .collection('users')
    .doc(AuthStack.auth().currentUser.uid)
    .collection('flights')
    .add({
      date: date,
      from: from,
      to: to,
      passengers: passengers,
    })
    .then(() => {
      Alert.alert('Done', 'Added sucesfully');
      navigation.reset({
        index: 0,
        routes: [{name: 'myflights'}],
      });
    });
};

const BookingStep5 = ({route, navigation}) => {
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
            doSaveOnFirebase(route.params, navigation);
          }}
          buttonStyle={CustomButtonStyle.customButton}
        />
      </View>
    </BookingWrapper>
  );
};

export default BookingStep5;
