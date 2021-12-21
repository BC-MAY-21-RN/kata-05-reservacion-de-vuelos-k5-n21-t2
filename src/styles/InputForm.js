import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  inputLabel: {
    paddingBottom: 1,
  },
  input: {
    paddingBottom: 0,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#5566dd',
    borderRadius: 5,
    height: 50,
  },
  inputFooter: {
    color: 'gray',
  },
  inputFormContainer: {
    padding: 0,
    magin: 0,
  },
  inputFormContainerStyle: {
    borderBottomWidth: 0,
  },
  inputError: {
    color: 'red',
  },
  inputLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default style;
