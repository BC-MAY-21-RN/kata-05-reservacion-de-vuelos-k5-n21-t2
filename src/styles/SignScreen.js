import {StyleSheet} from 'react-native';
import Theme from '../theme/light';
const {Colors} = Theme;

export const styles = StyleSheet.create({
  signScreenContainer: {
    padding: 20,
    flex: 1,
  },
  loadingText: {
    color: Theme.Colors.primaryColor,
    fontWeight: 'bold',
  },
  loadingIcon: {
    color: Theme.Colors.primaryColor,
  },
  formHeader: {
    color: Colors.primaryColor,
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  alternateSignSeparator: {
    paddingBottom: 10,
    textAlign: 'center',
  },
  checkboxContainer: {
    paddingVertical: 20,
  },
});
