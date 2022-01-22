import {StyleSheet} from 'react-native';
import Theme from '../theme/light';
const {Colors} = Theme;

export const styles = StyleSheet.create({
  signScreenContainer: {
    padding: 20,
    flex: 1,
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
