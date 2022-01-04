import React from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';

const BookingForm = () => {
  return (
    <View>
      <Text h2>Where are you now?</Text>
      <Input placeholder="Select location" />
      <Button title="Next" />
    </View>
  );
};

export default BookingForm;
