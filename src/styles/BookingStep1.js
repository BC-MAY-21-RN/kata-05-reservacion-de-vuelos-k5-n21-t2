import {StyleSheet} from 'react-native';
import Theme from '../theme/light';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: Theme.Spacing.xl,
  },
  upperContainer: {
    flex: 1,
  },
});

export default styles;
