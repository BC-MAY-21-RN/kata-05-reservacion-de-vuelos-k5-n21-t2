import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {CustomButtonStyle} from '../../styles';
import styles from '../../styles/BookingStep1Form';
import {Picker} from '@react-native-picker/picker';
const BookingLocations = require('../../utils/datasets/BookingLocations.json');

const BookingStep1Form = () => {
  const [location, setLocation] = useState('1');

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <Picker
          selectedValue={location}
          onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}>
          <Picker.Item
            label={BookingLocations[0].name}
            value={BookingLocations[0].countryCode}
          />
          <Picker.Item
            label={BookingLocations[1].name}
            value={BookingLocations[1].countryCode}
          />
        </Picker>
      </View>
      <View style={styles.submitContainer}>
        <>
          <Button
            style={styles.submit}
            title="Next"
            disabled={true}
            buttonStyle={CustomButtonStyle.customButton}
          />
        </>
      </View>
    </View>
  );
};

export default BookingStep1Form;
