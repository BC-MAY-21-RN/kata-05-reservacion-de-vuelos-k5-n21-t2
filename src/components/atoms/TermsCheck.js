import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import style from '../../styles/TermsCheck';

export const TermsCheck = ({title}) => {
  const [state, setState] = useState(false);

  return (
    <CheckBox
      containerStyle={style.checkbox}
      title={title}
      checkedColor="purple"
      checked={state.checked}
      onPress={() => setState({checked: !state.checked})}
    />
  );
};
