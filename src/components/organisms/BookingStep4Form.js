import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {CustomButtonStyle} from '../../styles';
import styles from '../../styles/BookingStep1Form';
import Theme from '../../theme/light';

const BookingStep4Form = () => {

  return (
    <View style={styles.container}>
      <View style={styles.submitContainer}>
        <>
          <Button
            style={styles.submit}
            title="Next"
            disabled={false}
            buttonStyle={CustomButtonStyle.customButton}
          />
        </>
      </View>
    </View>
  );
};

export default BookingStep4Form;
