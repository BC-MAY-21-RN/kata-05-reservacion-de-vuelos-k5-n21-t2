import {StyleSheet} from 'react-native';
import Theme from '../theme/light';

const styles = StyleSheet.create({
  flightItemRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Theme.Spacing.xs,
  },
  flightItem: {
    margin: Theme.Spacing.xl,
    paddingBottom: Theme.Spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(70, 70, 70)',
  },
  flightItemRow2: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  flightTextRow1: {
    fontSize: Theme.Font.xl,
    fontWeight: 'bold',
    color: 'black',
  },
  flightTextRow2: {
    fontSize: Theme.Font.m,
    fontWeight: 'bold',
    color: 'gray',
  },
  flightTextRow3: {
    fontSize: Theme.Font.m,
    fontWeight: 'bold',
    color: 'rgb(70, 70, 70)',
  },
  icon: {
    color: Theme.Colors.primaryColor,
    fontSize: Theme.Font.xl,
  },
  empty: {
    fontSize: Theme.Font.m,
  },
});

export default styles;
