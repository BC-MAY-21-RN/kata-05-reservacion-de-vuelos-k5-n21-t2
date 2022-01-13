import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {CustomButtonStyle} from '../../styles';
import styles from '../../styles/BookingStep1Form';
import {ScrollPicker} from 'react-native-value-picker';

const MOCK_DATA = [
  {value: 1, label: '1'},
  {value: 2, label: '2'},
  {value: 3, label: '3'},
  {value: 4, label: '4'},
  {value: 5, label: '5'},
  {value: 6, label: '6'},
];

const BookingStep4Form = ({route, navigation}) => {
  const [value, setValue] = useState('1');

  return (
    <View style={styles.container}>
      <View style={styles.submitContainer}>
        <>
          <View style={{height: '85%'}}>
            <View style={{height: 150, display: 'flex', alignItems: 'center'}}>
              <ScrollPicker
                // We need to tell the picker the current picked value
                currentValue={0}
                // The array of objects which makes up the list
                list={MOCK_DATA}
                labelColor="black"
                // Changes color of the text of the picked item in the list
                selectedColor="red"
                onItemPress={e => {
                  setValue(e);
                }}
              />
            </View>
          </View>
          <Button
            style={styles.submit}
            title="Next"
            onPress={() => {
              navigation.navigate('bookingstep5', {
                from: route.params.from,
                to: route.params.to,
                date: route.params.date,
                passengers: value,
              });
            }}
            buttonStyle={CustomButtonStyle.customButton}
          />
        </>
      </View>
    </View>
  );
};

export default BookingStep4Form;
