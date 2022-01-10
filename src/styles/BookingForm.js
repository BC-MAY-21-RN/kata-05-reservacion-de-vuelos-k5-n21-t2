import {StyleSheet} from 'react-native';
import Theme from '../theme/light';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.Spacing.xl,
  },
  header: {
    textAlign: 'center',
  },
  headerContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
  },
  fields: {
    flex: 1,
  },
  submitContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default styles;
