import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {CustomButtonStyle} from '../../styles';
import styles from '../../styles/BookingStep1Form';
import {Picker} from '@react-native-picker/picker';
const BookingLocations = require('../../utils/datasets/BookingLocations.json');
let FooLocations = BookingLocations;

const BookingLocationsForm = ({route, navigation, nextSection}) => {
  const [location, setLocation] = useState('1');
  let params =
    nextSection === 'bookingstep2'
      ? {from: location}
      : {from: route.params.from, to: location};
  const [ListedLocations, listLocations] = useState(null);

  useEffect(() => {
    const temp = FooLocations?.map(local => {
      return (
        <Picker.Item
          key={local.id.toString()}
          label={local.name}
          value={local.id}
        />
      );
    });
    listLocations(temp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <Picker
          selectedValue={location}
          onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}>
          {ListedLocations}
        </Picker>
      </View>
      <View style={styles.submitContainer}>
        <Button
          style={styles.submit}
          title="Next"
          onPress={() => navigation.navigate(nextSection, params)}
          buttonStyle={CustomButtonStyle.customButton}
        />
      </View>
    </View>
  );
};

export default BookingLocationsForm;
