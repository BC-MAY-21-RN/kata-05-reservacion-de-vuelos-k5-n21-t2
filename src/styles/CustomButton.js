import {StyleSheet} from 'react-native';
import Theme from '../theme/light';

export const CustomButtonStyle = StyleSheet.create({
  customButton: {
    borderRadius: 50,
    alignSelf: 'center',
    margin: 0,
    width: '95%',
    height: 50,
    backgroundColor: Theme.Colors.primaryColor,
  },
  customDisabledButton: {
    backgroundColor: 'rgba(230, 230, 230, 1)',
    color: 'black',
  },
  customDisabledButtonFont: {
    color: 'gray',
  },
  customDisabledButtonIcon: {
    color: 'gray',
  },
});
