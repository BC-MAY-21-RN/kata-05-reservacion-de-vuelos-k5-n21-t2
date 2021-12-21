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
});

export default Theme;
