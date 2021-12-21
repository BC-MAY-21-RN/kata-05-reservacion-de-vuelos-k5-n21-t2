import {StyleSheet} from 'react-native';
import Theme from '../theme/light';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Theme.Colors.primaryColor,
    width: 80,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  icon: {
    fontSize: Theme.Font.xxxl,
  },
});

export default styles;
