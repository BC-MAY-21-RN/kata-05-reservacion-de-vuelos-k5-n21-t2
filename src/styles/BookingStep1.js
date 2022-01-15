import {StyleSheet} from 'react-native';
import Theme from '../theme/light';

const styles = StyleSheet.create({
  locationsContainer: {
    flex: 3,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    margin: Theme.Spacing.xxl,
  },
  headerContainer: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  submitContainer: {
    flex: 3,
    backgro: 'red',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: Theme.Spacing.xl,
  },
  upperContainer: {
    flex: 1,
  },
});

export default styles;
