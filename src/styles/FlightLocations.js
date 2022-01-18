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
  },
  container: {
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  date: {
    color: 'black',
    fontSize: Theme.Font.m,
    fontWeight: '600',
    marginTop: Theme.Spacing.m,
  },
  flightItemRow2: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  rightText: {
    textAlign: 'right',
  },
  flightTextRow1: {
    width: '40%',
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
});

export default styles;
