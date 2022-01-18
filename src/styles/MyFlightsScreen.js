import {StyleSheet} from 'react-native';
import Theme from '../theme/light';

export const styles = StyleSheet.create({
  topHeader: {
    color: Theme.Colors.primaryColor,
    fontSize: Theme.Font.xxl,
    fontWeight: 'bold',
    marginBottom: Theme.Spacing.l,
  },
  myFlightsScreenContainer: {
    padding: Theme.Spacing.l,
    flex: 1,
  },
});
