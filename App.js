/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*
Co-authored-by: Namoku <contact@namoku.xyz>
Co-authored-by: Darkboy5120 <hmaldoando0@ucol.mx>
Co-authored-by: thisisofficial <thisisofficiallyofficial@gmail.com>
*/

import React from 'react';
import BookingStep1 from './src/screens/BookingStep1';
import BookingStep2 from './src/screens/BookingStep2';
import BookingStep3 from './src/screens/BookingStep3';
import BookingStep4 from './src/screens/BookingStep4';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="bookingstep1"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="bookingstep1" component={BookingStep1} />
        <Stack.Screen name="bookingstep2" component={BookingStep2} />
        <Stack.Screen name="bookingstep3" component={BookingStep3} />
        <Stack.Screen name="bookingstep4" component={BookingStep4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
