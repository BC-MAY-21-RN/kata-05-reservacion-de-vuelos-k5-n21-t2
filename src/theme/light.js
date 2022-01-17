import {StyleSheet} from 'react-native';

const Palette = {
  purple: '#5566dd',
  lightgray: '#cccccc',
};

const Theme = StyleSheet.create({
  Colors: {
    primaryColor: Palette.purple,
    disabledColor: Palette.lightgray,
  },
  Spacing: {
    xs: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 25,
    xxxl: 30,
  },
  Font: {
    xxxl: 32,
    xxl: 28,
    xl: 24,
    l: 20,
    m: 16,
    xs: 12,
  },
});

export default Theme;
