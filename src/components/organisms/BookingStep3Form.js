import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {CustomButtonStyle} from '../../styles';
import styles from '../../styles/BookingStep1Form';
import {Calendar} from 'react-native-calendars';
import Theme from '../../theme/light';

const ZeroFill = value => {
  let number = parseInt(value);
  if (number < 10) {
    value = '0' + value;
  }
  return value;
};

const getToday = () => {
  let date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  let month = parseInt(date.getMonth()) + 1;

  let result = `${year}-${ZeroFill(month)}-${ZeroFill(day)}`;
  return result;
};

const MarkedConfig = value => {
  let result = {};
  result[value] = {selected: true, selectedColor: Theme.Colors.primaryColor};
  return result;
};

const BookingStep3Form = () => {
  const [location, setLocation] = useState('1');
  const minDate = getToday();
  const [value, setValue] = useState(minDate);

  return (
    <View style={styles.container}>
      <View style={styles.submitContainer}>
        <>
          <Calendar
            minDate={minDate}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            markedDates={MarkedConfig(value)}
            onDayPress={day => {
              setValue(day.dateString);
            }}
          />
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

export default BookingStep3Form;
