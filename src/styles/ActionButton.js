import {StyleSheet} from 'react-native';
import Theme from '../theme/light';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Theme.Colors.primaryColor,
    width: 60,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    zIndex: 2,
  },
  icon: {
    fontSize: Theme.Font.xxxl,
  },
});

export default styles;
