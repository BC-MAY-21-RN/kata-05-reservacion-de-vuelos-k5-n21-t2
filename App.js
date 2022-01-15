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
import BookingStep5 from './src/screens/BookingStep5';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MyFlightsScreen from './src/screens/MyFlightsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginscreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="loginscreen" component={LoginScreen} />
        <Stack.Screen name="registerscreen" component={RegisterScreen} />
        <Stack.Screen name="bookingstep1" component={BookingStep1} />
        <Stack.Screen name="bookingstep2" component={BookingStep2} />
        <Stack.Screen name="bookingstep3" component={BookingStep3} />
        <Stack.Screen name="bookingstep4" component={BookingStep4} />
        <Stack.Screen name="bookingstep5" component={BookingStep5} />
        <Stack.Screen
          name="myflights"
          component={MyFlightsScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
