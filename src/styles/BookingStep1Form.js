import {StyleSheet} from 'react-native';
import Theme from '../theme/light';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: Theme.Spacing.xl,
  },
  fields: {
    flex: 1,
  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default styles;
